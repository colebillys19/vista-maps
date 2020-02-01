import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the browse state domain
 */

const selectBrowseDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Browse
 */

const makeSelectBrowse = () =>
  createSelector(
    selectBrowseDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectBrowse;
export { selectBrowseDomain };
