import React from 'react';
import OperationList from '.';
import ThemeProvider from '../../../Themes';

export default {
  title: 'Application/OperationList',
  component: OperationList,  
};


const Template = (args) => <ThemeProvider><OperationList {...args} /></ThemeProvider>;

export const PperationTemplate = Template.bind({});
