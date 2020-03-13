import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface GlobalStateState {
  readonly default: any;
}

/* --- ACTIONS --- */
type GlobalStateActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = GlobalStateState;
type ContainerActions = GlobalStateActions;

export { RootState, ContainerState, ContainerActions };
