/*
 *
 * User
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUser from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});

interface Props {}

function User(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'user', reducer: reducer });
  useInjectSaga({ key: 'user', saga: saga });

  const { user } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <Helmet>
        <title>User</title>
        <meta name="description" content="Description of User" />
      </Helmet>
    </div>
  );
}

export default memo(User);
