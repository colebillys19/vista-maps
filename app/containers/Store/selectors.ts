import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the store state domain
 */

const selectStoreDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Store
 */

const makeSelectStore = () =>
  createSelector(
    selectStoreDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectStore;
export { selectStoreDomain };
