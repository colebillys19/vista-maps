/**
 *
 * LandingPage
 *
 */
import React, { memo } from 'react';

import Slideshow from '../Slideshow/Loadable';
import SearchForm from '../SearchForm';
// import VistaListLanding from '../VistaList/Landing/Loadable';
import { LandingWrapper } from './styledComponents';

interface Props {}

function LandingPage(props: Props) {
  return (
    <LandingWrapper>
      <Slideshow />
      <SearchForm />
    </LandingWrapper>
  );
}

export default memo(LandingPage);
