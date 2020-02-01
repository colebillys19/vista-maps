/*
 *
 * Vista
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVista from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  vista: makeSelectVista(),
});

interface Props {}

function Vista(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'vista', reducer: reducer });
  useInjectSaga({ key: 'vista', saga: saga });

  const { vista } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <Helmet>
        <title>Vista</title>
        <meta name="description" content="Description of Vista" />
      </Helmet>
    </div>
  );
}

export default memo(Vista);
