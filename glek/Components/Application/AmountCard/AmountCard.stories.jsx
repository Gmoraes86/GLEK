import React from 'react';
import AmountCard from '.';
import ThemeProvider from '../../../Themes';

export default {
  title: 'Application/AmountCard',
  component: AmountCard,  
};


const Template = (args) => <ThemeProvider><AmountCard {...args} /></ThemeProvider>;

export const AmountCardTemplate = Template.bind({});
