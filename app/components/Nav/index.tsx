/**
 *
 * Nav
 *
 */

import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';

import Links from './Links';
import UserMenu from './UserMenu';
import { StyledSection, StyledToolbar } from './styledComponents';

// interface Props { isLoggedIn?: boolean; }

function Nav() {
  return (
    <StyledSection>
      <AppBar position="static">
        <StyledToolbar color="primary">
          <Links />
          <UserMenu />
        </StyledToolbar>
      </AppBar>
    </StyledSection>
  );
}

export default memo(Nav);
