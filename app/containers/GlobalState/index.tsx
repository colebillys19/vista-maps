/*
 *
 * GlobalState
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGlobalState from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  globalState: makeSelectGlobalState(),
});

// type Props {}

function GlobalState() {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'globalState', reducer: reducer });
  useInjectSaga({ key: 'globalState', saga: saga });

  const { globalState } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return  <div/>;
}

export default GlobalState;
