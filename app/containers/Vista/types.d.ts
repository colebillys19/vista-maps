import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface VistaState {
  readonly default: any;
}

/* --- ACTIONS --- */
type VistaActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = VistaState;
type ContainerActions = VistaActions;

export { RootState, ContainerState, ContainerActions };
