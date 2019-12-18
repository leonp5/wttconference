import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.js

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);

addDecorator(GlobalStyleDecorator);
addDecorator(withKnobs);

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
