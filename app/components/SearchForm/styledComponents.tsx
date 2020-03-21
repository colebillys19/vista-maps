import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

import muiTheme from '../../resources/muiTheme';
import { PRIMARY_BACKGROUND } from '../../resources/styleConstants';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const CategoryButton = styled((props) => (
  <Button disableRipple {...props} />
))`
  background-color: #e9e8f2 !important;
  border-bottom: 1px solid #86868b;
  display: flex;
  height: 5.1rem;
  justify-content: space-between;
  letter-spacing: normal;
  padding: 0 1.2rem;
  text-transform: none;
  & svg {
    font-size: 3.5rem !important;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  background-color: ${PRIMARY_BACKGROUND};
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.1rem;
  min-height: 5.1rem;
  padding: 0.7rem 1.2rem;
  width: 100%;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: ${muiTheme.palette.primary.dark};
  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;
  margin: 0 0 1.3rem 1.2rem;
`;
