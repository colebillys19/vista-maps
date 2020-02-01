import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface BrowseState {
  readonly default: any;
}

/* --- ACTIONS --- */
type BrowseActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = BrowseState;
type ContainerActions = BrowseActions;

export { RootState, ContainerState, ContainerActions };
