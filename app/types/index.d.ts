import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { ContainerState as BrowseState } from 'containers/Browse/types';
import { ContainerState as LandingState } from 'containers/Landing/types';
import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';
import { ContainerState as StoreState } from 'containers/Store/types';
import { ContainerState as UserState } from 'containers/User/types';
import { ContainerState as VistaState } from 'containers/Vista/types';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: (() => IterableIterator<any>) | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly browse: BrowseState;
  readonly landing: LandingState;
  readonly language: LanguageProviderState;
  readonly router: RouterState;
  readonly store: StoreState;
  readonly user: UserState;
  readonly vista: VistaState;
  // for testing purposes
  readonly test: any;
}
