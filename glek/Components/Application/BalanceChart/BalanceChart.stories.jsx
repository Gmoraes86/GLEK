import React from 'react';
import BalanceChart from '.';
import ThemeProvider from '../../../Themes';

export default {
  title: 'Application/BalanceChart',
  component: BalanceChart,  
};


const Template = (args) => <ThemeProvider><BalanceChart {...args} /></ThemeProvider>;

export const BalanceChartTemplate = Template.bind({});
