import React from 'react';
import Sidebar from '.';
import ThemeProvider from '../../../Themes';

export default {
  title: 'Application/Sidebar',
  component: Sidebar,  
};


const Template = (args) => <ThemeProvider><Sidebar {...args} /></ThemeProvider>;

export const SidebarTemplate = Template.bind({});
