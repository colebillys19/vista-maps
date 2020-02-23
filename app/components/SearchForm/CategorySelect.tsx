/**
 *
 * CategorySelect
 *
 */
import React, { memo } from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuOpen from '@material-ui/icons/MenuOpen';


import { StyledInput } from './styledComponents';

// interface Props {}

function CategorySelect() {
  const endAdornment = (
    <InputAdornment position="end">
      <MenuOpen />
    </InputAdornment>
  );

  return (
    <StyledInput
      pointerEvents="none"
      endAdornment={endAdornment}
      value="All Categories"
    />
  );
}

export default memo(CategorySelect);
