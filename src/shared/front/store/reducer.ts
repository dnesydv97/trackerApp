import produce, {createDraft} from 'immer';
import {SET, RESET, UPDATE, START_LOADING, STOP_LOADING, RESET_REDUX} from './constants';
import initialState from './initialState';
let RESET_COUNT = 0;
const appReducer = (
  state = initialState,
  action: {
    key?: keyof typeof initialState;
    data?: any;
    type: string;
  },
) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        return initialState;
      case SET:
        if (action?.data?.data) {
          draft[action.key] = action.data?.data;
          if (action.data?.pagination) {
            draft['pagination'] = action.data?.pagination;
          }
        } else {
          draft[action.key] = action.data;
        }
        break;
      case RESET:
        draft[action.key] = initialState[action.key];
        break;
      case UPDATE: {
        if (draft[action.key]) {
          try {
            if (typeof action.data === 'function') {
              draft[action.key] = action.data(draft[action.key]);
            } else {
              if (Array.isArray(draft[action.key])) {
                if (action?.data?.data) {
                  draft[action.key] = [...draft[action.key], ...action.data?.data];
                  if (action.data?.pagination) {
                    draft['pagination'] = action.data?.pagination;
                  }
                } else {
                  draft[action.key] = [...draft[action.key], ...action.data];
                }
              } else if (typeof initialState === 'object') {
                draft[action.key] = {...draft[action.key], ...action.data};
              }
            }
          } catch (err) {
            console.log('state update failed err', err);
          }
          break;
        }
      }
      case START_LOADING: {
        draft['loading'] = {...draft['loading'], [action.key]: true};
        break;
      }
      case STOP_LOADING: {
        draft['loading'] = {...draft['loading'], [action.key]: false};
        break;
      }
    }
  });

export default appReducer;
