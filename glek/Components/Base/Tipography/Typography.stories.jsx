import React from 'react';
import Typography from '.';
import ThemeProvider from '../../../Themes';

export default {
  component: Typography,  
  argTypes: {
    variant: {
      options: ['Heading1', 'Heading2', 'Heading3', 'Heading4', 'Heading5', 'Heading6'],
      control: { type: 'select' },
    },
  }
};


const Template = (args) => <ThemeProvider><Typography {...args} /></ThemeProvider>;

export const Heading = Template.bind({});
Heading.args = {
  children: 'Sample Heading',
  variant: 'Heading1',
};
