import styled from 'styled-components';

import PlaceholderImage from '../../images/placeholder.png';

export const StyledHeader = styled.h1`
  font-size: 4rem;
  padding: 0;
`;

export const StyledSection = styled.section`
  align-items: center;
  background-image: url(${PlaceholderImage});
  background-position: center;
  box-shadow: 0 0 3vh #777;
  display: flex;
  justify-content: center;
  min-height: 75vh;
  width: 100%;
`;
