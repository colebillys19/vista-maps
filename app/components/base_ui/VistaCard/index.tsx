/**
 *
 * VistaCard
 *
 */
import React, { memo } from 'react';

import {
  Detail,
  DetailLabel,
  Name,
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
} from './styledComponents';

interface Props {
  author: string;
  imageUrl: string;
  name: string;
  rating: number;
}

function VistaCard(props: Props) {
  const {
    author,
    imageUrl,
    name,
    rating,
  } = props;

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

export default memo(VistaCard);
