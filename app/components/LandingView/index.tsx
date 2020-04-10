/**
 *
 * LandingView
 *
 */
import React, { memo } from 'react';

import Slideshow from '../Slideshow';
import SearchForm from '../SearchForm';
import VistaList from '../VistaList';
import { LandingWrapper } from './styledComponents';

// type Props {}

function LandingView() {
  return (
    <LandingWrapper>
      <Slideshow />
      <SearchForm />
      <VistaList />
    </LandingWrapper>
  );
}

export default memo(LandingView);
