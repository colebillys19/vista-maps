/**
 *
 * SearchForm
 *
 */
import React, { memo } from 'react';

import CategorySelect from './CategorySelect';
import { GhostButton, PrimaryButton } from '../base_ui/buttons';
import {
  StyledInput,
  StyledForm,
  StyledInputLabel,
} from './styledComponents';

// type Props {}

function SearchForm() {
  return (
    <StyledForm>
      <StyledInputLabel>Search Vistas</StyledInputLabel>
      <StyledInput color="primary" placeholder="Enter Keyword..." />
      <CategorySelect />
      <PrimaryButton>Search</PrimaryButton>
      <GhostButton>Browse</GhostButton>
    </StyledForm>
  );
}

export default memo(SearchForm);
