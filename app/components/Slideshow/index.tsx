/**
 *
 * Slideshow
 *
 */

import React, { memo } from 'react';

import { StyledSection, StyledHeader } from './styledComponents';

function Slideshow() {
  return (
    <StyledSection>
      <StyledHeader>VistaMaps</StyledHeader>
    </StyledSection>
  );
}

export default memo(Slideshow);
