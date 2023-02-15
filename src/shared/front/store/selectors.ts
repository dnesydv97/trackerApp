import {createSelector} from 'reselect';
import initialState from './initialState';

const selectRoot = state => state || initialState;

const createInitialSelectors = () => {
  let selectors = {};
  Object.keys(initialState).map(key => {
    selectors[key] = createSelector(selectRoot, state => state[key]);
  });

  return selectors;
};

const selectors: typeof initialState = createInitialSelectors();
export default selectors;
