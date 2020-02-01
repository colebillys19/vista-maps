/**
 *
 * LandingPage
 *
 */
import React, { memo } from 'react';

import Slideshow from '../Slideshow/Loadable';
import SearchForm from '../base_ui/SearchForm';
import VistaListLanding from '../VistaListLanding/Loadable';
import { LandingWrapper } from './styledComponents';

interface Props {}

function LandingPage(props: Props) {
  return (
    <LandingWrapper>
      <Slideshow />
      <SearchForm />
      <VistaListLanding />
    </LandingWrapper>
  );
}

export default memo(LandingPage);
