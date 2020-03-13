/*
 *
 * Landing
 *
 */

import React, { Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLanding from './selectors';
import reducer from './reducer';
import saga from './saga';

import LandingView from 'components/LandingView';

const stateSelector = createStructuredSelector({
  landing: makeSelectLanding(),
});

// type Props {}

function Landing() {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'landing', reducer: reducer });
  useInjectSaga({ key: 'landing', saga: saga });

  const { landing } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Helmet>
        <title>Landing</title>
        <meta name="description" content="Description of Landing" />
      </Helmet>
      <LandingView />
    </Fragment>
  );
}

export default memo(Landing);
