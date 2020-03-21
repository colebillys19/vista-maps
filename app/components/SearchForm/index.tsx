/**
 *
 * SearchForm
 *
 */
import React, { memo } from 'react';

import CategorySelect from './CategorySelect';
import { GhostButton, PrimaryButton } from '../base_ui/buttons';
import {
  ButtonContainer,
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
      <ButtonContainer>
        <PrimaryButton>Search</PrimaryButton>
        <GhostButton>Browse</GhostButton>
      </ButtonContainer>
    </StyledForm>
  );
}

export default memo(SearchForm);
