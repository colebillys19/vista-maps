/**
 *
 * VistaCard
 *
 */
import React from 'react';

import {
  Detail,
  DetailLabel,
  Name,
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
} from './styledComponents';

function VistaCard({
  author,
  imageUrl,
  name,
  rating,
}) {
  return (
    <StyledCard>
        <StyledCardMedia
          image={imageUrl}
          title={name}
        />
        <StyledCardContent>
          <Name>{name}</Name>
          <Detail>
            <DetailLabel>rating: </DetailLabel>
            {`${rating}/10`}
          </Detail>
          <Detail>
            <DetailLabel>posted by: </DetailLabel>
            {author}
          </Detail>
        </StyledCardContent>
    </StyledCard>
  );
}

export default VistaCard;
