/**
 *
 * Links
 *
 */

import React, { memo } from 'react';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import { LinksWrapper } from './styledComponents';

// type Props { isLoggedIn?: boolean; }

function Links() {
  return (
    <LinksWrapper>
      <IconButton aria-label="home" color="inherit">
        <HomeIcon />
      </IconButton>
      <IconButton aria-label="search" color="inherit">
        <SearchIcon />
      </IconButton>
    </LinksWrapper>
  );
}

export default memo(Links);
