import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface StoreState {
  readonly default: any;
}

/* --- ACTIONS --- */
type StoreActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = StoreState;
type ContainerActions = StoreActions;

export { RootState, ContainerState, ContainerActions };
