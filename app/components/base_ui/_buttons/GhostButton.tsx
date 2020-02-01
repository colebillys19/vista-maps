/**
 *
 * GhostButton
 *
 */
import React from 'react';

import PrimaryButton from './PrimaryButton';

interface Props { variant: string }

function GhostButton(props: Props) {
  return <PrimaryButton variant="outlined" {...props} />;
}

export default GhostButton;
