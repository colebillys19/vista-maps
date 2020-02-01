import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the vista state domain
 */

const selectVistaDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Vista
 */

const makeSelectVista = () =>
  createSelector(
    selectVistaDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectVista;
export { selectVistaDomain };
