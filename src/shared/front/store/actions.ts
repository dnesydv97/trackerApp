import {SET, RESET, UPDATE, REMOVE, RESET_REDUX, START_LOADING, STOP_LOADING} from './constants';
import initialState from './initialState';

export function set(key: keyof typeof initialState, data: any) {
  return {
    type: SET,
    data,
    key,
  };
}

export function reset(key: keyof typeof initialState) {
  return {
    type: RESET,
    data: null,
    key,
  };
}

export function update(key: keyof typeof initialState, data: any) {
  return {
    type: UPDATE,
    data,
    key,
  };
}

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function startLoading(key: keyof typeof initialState) {
  return {
    type: START_LOADING,
    key,
  };
}

export function stopLoading(key: keyof typeof initialState) {
  return {
    type: STOP_LOADING,
    key,
  };
}
