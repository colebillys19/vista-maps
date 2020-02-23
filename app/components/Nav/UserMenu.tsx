/**
 *
 * UserMenu
 *
 */

import React, { memo, Fragment, useRef, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountIcon from '@material-ui/icons/AccountCircle';
import Modal from '@material-ui/core/Modal';

// interface Props { isLoggedIn?: boolean; }

function UserMenu() {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

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
    <Fragment>
      <IconButton
        ref={anchorRef}
        aria-label="menu"
        color="inherit"
        onClick={handleToggle}
      >
        <AccountIcon />
      </IconButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div>Hello</div>
      </Modal>
    </Fragment>
  );
}

export default memo(UserMenu);
