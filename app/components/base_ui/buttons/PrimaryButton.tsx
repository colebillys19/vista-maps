/**
 *
 * PrimaryButton
 *
 */
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';

import { DEFAULT_FONT_SIZE } from '../../../styleConstants';

type Props = ButtonProps;

const StyledButton = styled((props) => (
  <Button centerRipple {...props} />
))`
  padding: 0.4rem 0;
  span { font-size: ${DEFAULT_FONT_SIZE}; }
  text-transform: none;
  margin: 0 1rem;
  width: 13rem;
  height: 5.1rem;
`;

function PrimaryButton(props: Props) {
  return <StyledButton color="primary" variant="contained" {...props} />;
}

export default PrimaryButton;
