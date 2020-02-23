/**
 *
 * PrimaryButton
 *
 */
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';

import { DEFAULT_FONT_SIZE } from '../../../resources/styleConstants';

type Props = ButtonProps;

const StyledButton = styled(Button)`
  padding: 0.4rem 3rem;
  span { font-size: ${DEFAULT_FONT_SIZE}; }
  text-transform: none;
  margin: 1.3rem auto 0;
  width: 15rem;
  height: 5.1rem;
`;

function PrimaryButton(props: Props) {
  return <StyledButton color="primary" variant="contained" {...props} />;
}

export default PrimaryButton;
