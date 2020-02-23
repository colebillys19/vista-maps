/**
 *
 * GhostButton
 *
 */
import React from 'react';

import PrimaryButton from './PrimaryButton';

interface Props {}

function GhostButton(props: Props) {
  return <PrimaryButton {...props} />;
}

export default GhostButton;
