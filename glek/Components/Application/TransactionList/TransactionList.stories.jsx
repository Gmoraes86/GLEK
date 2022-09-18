import React from 'react';
import TransactionList from '.';
import ThemeProvider from '../../../Themes';

export default {
  title: 'Application/TransactionList',
  component: TransactionList,  
};


const Template = (args) => <ThemeProvider><TransactionList {...args} /></ThemeProvider>;

export const TransactionTemplate = Template.bind({});
