/**
 *
 * GhostButton
 *
 */
import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';

import PrimaryButton from './PrimaryButton';

type Props = ButtonProps;

function GhostButton(props: Props) {
  return <PrimaryButton variant="outlined" {...props} />;
}

export default GhostButton;
