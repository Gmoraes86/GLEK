import React from 'react';
import Header from '.';
import ThemeProvider from '../../../Themes';

export default {
  title: 'Application/Header',
  component: Header,  
};


const Template = (args) => <ThemeProvider><Header {...args} /></ThemeProvider>;

export const HeaderTemplate = Template.bind({});
