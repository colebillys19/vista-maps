/**
 *
 * VistaListLanding
 *
 */
import React, { memo } from 'react';

import VistaCard from 'components/VistaCard';
import ColumnList from 'components/base_ui/ColumnList';

function VistaListLanding() {
  return (
    <ColumnList>
      <VistaCard
        author="Billy"
        imageUrl="https://res.cloudinary.com/dxklaorw6/image/upload/v1542642062/lktqn9nyu8vbnr93vyei.jpg"
        name="Los Angeles"
        rating="5"
      />
    </ColumnList>
  );
}

export default memo(VistaListLanding);
