/**
 *
 * CategorySelect
 *
 */
import React, {
  memo,
  Fragment,
  useRef,
  useState,
} from 'react';
import Reorder from '@material-ui/icons/Reorder';
import Modal from '@material-ui/core/Modal';


import { CategoryButton } from './styledComponents';

// type Props {}

function CategorySelect() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('All Categories');

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
      <CategoryButton
        endIcon={<Reorder />}
        fullWidth
        onClick={handleToggle}
      >
        {category}
      </CategoryButton>
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

export default memo(CategorySelect);
