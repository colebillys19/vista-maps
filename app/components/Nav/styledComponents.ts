import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

export const LinksWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: auto;
  button:last-of-type {
    position: relative;
    left: -0.2rem;
  }
`;

export const StyledSection = styled.section`
  background-color: #ccc;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 0;
  padding: 0 0.6rem;
`;
