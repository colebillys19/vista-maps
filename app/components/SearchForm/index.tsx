/**
 *
 * SearchForm
 *
 */
import React, { memo } from 'react';
import Input from '@material-ui/core/Input';

import CategorySelect from './CategorySelect';
import { GhostButton, PrimaryButton } from '../base_ui/buttons';
import {
  StyledInput,
  StyledSection,
  StyledInputLabel,
} from './styledComponents';

// interface Props {}

function SearchForm() {
  return (
    <StyledSection>
      <StyledInputLabel htmlFor="">Search Vistas</StyledInputLabel>
      <StyledInput pointerEvents="auto" placeholder="Enter Keyword..." />
      <CategorySelect />
      <PrimaryButton>Search</PrimaryButton>
      <GhostButton>Browse</GhostButton>
    </StyledSection>
  );
}

export default memo(SearchForm);
