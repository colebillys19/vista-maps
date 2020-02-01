import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import muiTheme from '../../../resources/muiTheme';
import { PRIMARY_BACKGROUND } from '../../../resources/styleConstants';

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

export const InputWrapper = styled.div`
  & .MuiInputBase-root {
    background-color: ${PRIMARY_BACKGROUND};
    font-size: 2rem;
    margin-bottom: 0.1rem;
    min-height: 5.1rem;
    padding: 0.7rem 1.2rem;
    width: 100%;
  }
`;

export const SelectWrapper = styled(FormControl)`
  & .MuiInputBase-root {
    background-color: ${PRIMARY_BACKGROUND};
    min-height: 5.2rem;
    padding: 0.7rem 1.2rem;
  }
  & .MuiSelect-root {
    background-color: ${PRIMARY_BACKGROUND};
    font-size: 2rem;
  }
  svg {
    height: 100%;
    margin-right: 0.3rem;
    position: absolute;
    top: 0;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  display: block;
  font-family: Lato, sans-serif;
  font-size: 2rem;
  min-height: 0rem;
  padding: 1rem 2rem;
  text-align: center;
  & :first-of-type { border-bottom: 1px solid #eee; }
`;

export const StyledButton = styled(Button)`
  margin: 2rem auto 0;
  text-transform: none;
  padding: 0.4rem 3rem;
  span { font-size: 2.2rem; }
  &:last-of-type {
    margin-top: 1rem;
    span { font-size: 2rem; }
  }
`;
