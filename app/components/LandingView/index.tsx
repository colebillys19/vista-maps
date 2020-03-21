/**
 *
 * LandingView
 *
 */
import React, { memo } from 'react';

import Slideshow from '../Slideshow';
import SearchForm from '../SearchForm';
import VistaListLanding from '../VistaListLanding';
import { LandingWrapper } from './styledComponents';

// type Props {}

function LandingView() {
  return (
    <LandingWrapper>
      <Slideshow />
      <SearchForm />
      <VistaListLanding />
    </LandingWrapper>
  );
}

export default memo(LandingView);
