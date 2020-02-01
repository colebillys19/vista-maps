/**
 *
 * PrimaryButton
 *
 */
import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { DEFAULT_FONT_SIZE } from '../../../resources/styleConstants';

interface Props {}

const StyledButton = styled(Button)`
  text-transform: none;
  padding: 0.4rem 3rem;
  span { font-size: ${DEFAULT_FONT_SIZE}; }
`;

function PrimaryButton(props: Props) {
  return <StyledButton {...props} />;
}

export default PrimaryButton;
