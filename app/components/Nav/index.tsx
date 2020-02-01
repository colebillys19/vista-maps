/**
 *
 * Nav
 *
 */

import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import AccountIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import {
  MobileNavSection,
  StyledMenuItem,
  StyledSection,
  StyledToolbar,
} from './styledComponents';

// interface Props { isLoggedIn?: boolean; }

function Nav() {
// function Nav(props: Props) {
  // const { isLoggedIn } = props;

  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <StyledSection>
      <AppBar position="static">
        <StyledToolbar color="primary">
          <MobileNavSection>
            <IconButton aria-label="home" color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
          </MobileNavSection>
          <IconButton
            ref={anchorRef}
            aria-label="menu"
            color="inherit"
            onClick={handleToggle}
          >
            <AccountIcon />
          </IconButton>
          <Popper
            anchorEl={anchorRef.current}
            open={open}
            placement="left"
            role={undefined}
            transition
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow">
                      <StyledMenuItem onClick={handleClose}>
                        Login
                      </StyledMenuItem>
                      <StyledMenuItem onClick={handleClose}>
                        Register
                      </StyledMenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </StyledToolbar>
      </AppBar>
    </StyledSection>
  );
}

export default memo(Nav);
