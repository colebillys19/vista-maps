/**
 *
 * VistaListLanding
 *
 */
import React, { memo } from 'react';

import VistaCard from 'components/VistaCard';

import { StyledColumnList } from './styledComponents';
import mockData from './mockData';

function VistaListLanding() {
  return (
    <StyledColumnList>
      {mockData.map((vista) => <VistaCard key={vista.imageUrl} {...vista} />)}
    </StyledColumnList>
  );
}

export default memo(VistaListLanding);
