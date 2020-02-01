import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';

import muiTheme from '../../resources/muiTheme';

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

export const MobileNavSection = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: auto;
  button:last-of-type {
    position: relative;
    left: -0.2rem;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: ${muiTheme.palette.primary.main};
  display: block;
  font-family: Lato, sans-serif;
  font-size: 2rem;
  min-height: 0rem;
  padding: 1.2rem 2.4rem;
  text-align: center;
  &:first-of-type { border-bottom: 1px solid #eee; }
`;
