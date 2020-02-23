/*
 *
 * Store
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStore from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  store: makeSelectStore(),
});

// type Props {}

function Store() {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'store', reducer: reducer });
  useInjectSaga({ key: 'store', saga: saga });

  const { store } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return  <div/>;
}

export default Store;
