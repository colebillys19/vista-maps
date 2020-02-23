import React, { ComponentType } from 'react';
import styled from 'styled-components';
import Input, { InputProps } from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import muiTheme from '../../resources/muiTheme';
import { PRIMARY_BACKGROUND } from '../../resources/styleConstants';

type StyledInputProps = InputProps & { pointerEvents: string };

export const StyledInput = styled(Input)`
  background-color: ${PRIMARY_BACKGROUND};
  font-size: 2rem;
  margin-bottom: 0.1rem;
  min-height: 5.1rem;
  padding: 0.7rem 1.2rem;
  pointer-events: ${(props: StyledInputProps) => props.pointerEvents};
  width: 100%;
` as ComponentType<StyledInputProps>;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 3rem;
  width: 100%;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: ${muiTheme.palette.primary.dark};
  font-size: 1.5rem;
  margin: 0 0 1.3rem 1.2rem;
`;
