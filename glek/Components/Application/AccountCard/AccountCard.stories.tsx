import React from 'react';
import AccountCard from '.';
import ThemeProvider from '../../../Themes';

export default {
  title: 'Application/AccountCard',
  component: AccountCard,  
};


const Template = (args) => <ThemeProvider><AccountCard {...args} /></ThemeProvider>;

export const AccountCardTemplate = Template.bind({});
