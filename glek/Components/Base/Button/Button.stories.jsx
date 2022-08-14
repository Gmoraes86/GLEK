import React from 'react';
import Button from '.';
import ThemeProvider from '../../../Themes';

export default {
  component: Button,  
};


const Template = () => <ThemeProvider><Button /></ThemeProvider>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

