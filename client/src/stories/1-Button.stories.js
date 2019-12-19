import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '../components/Button';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export function Text() {
  return (
    <Button onClick={action('clicked')} buttontext={text('Button Label', 'Anmelden')}></Button>
  );
}

export function Menu() {
  return <Button onClick={action('clicked')}></Button>;
}
