import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the globalState state domain
 */

const selectGlobalStateDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by GlobalState
 */

const makeSelectGlobalState = () =>
  createSelector(
    selectGlobalStateDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectGlobalState;
export { selectGlobalStateDomain };
