import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface UserState {
  readonly default: any;
}

/* --- ACTIONS --- */
type UserActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = UserState;
type ContainerActions = UserActions;

export { RootState, ContainerState, ContainerActions };
