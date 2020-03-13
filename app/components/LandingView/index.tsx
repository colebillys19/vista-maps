/**
 *
 * LandingView
 *
 */
import React, { memo } from 'react';

import Slideshow from '../Slideshow/Loadable';
import SearchForm from '../SearchForm';
// import VistaListLanding from '../VistaList/Landing/Loadable';
import { LandingWrapper } from './styledComponents';

// type Props {}

function LandingView() {
  return (
    <LandingWrapper>
      <Slideshow />
      <SearchForm />
    </LandingWrapper>
  );
}

export default memo(LandingView);
