/**
 *
 * SearchForm
 *
 */
import React, { memo } from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

import {
  InputWrapper,
  StyledSection,
  SelectWrapper,
  StyledButton,
  StyledInputLabel,
  StyledMenuItem,
} from './styledComponents';

// interface Props {}

function SearchForm() {
  const [category, setCategory] = React.useState('all');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };
  return (
    <StyledSection>
      <StyledInputLabel htmlFor="">Search Vistas</StyledInputLabel>
      <InputWrapper>
        <Input placeholder="Enter Keyword..." id="" />
      </InputWrapper>
      <SelectWrapper>
        <Select onChange={handleChange} value={category} >
          <StyledMenuItem value="all">All Categories</StyledMenuItem>
          <StyledMenuItem value="earth">Earth</StyledMenuItem>
          <StyledMenuItem value="wind">Wind</StyledMenuItem>
          <StyledMenuItem value="fire">Fire</StyledMenuItem>
        </Select>
      </SelectWrapper>
      <StyledButton color="primary" variant="contained">Search</StyledButton>
      <StyledButton>Browse</StyledButton>
    </StyledSection>
  );
}

export default memo(SearchForm);
