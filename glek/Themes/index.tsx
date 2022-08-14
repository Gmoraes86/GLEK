import { ThemeProvider as StyledThemeProvider } from "styled-components";

import React, { ReactElement } from "react";

interface ThemeProviderProps {
  children: ReactElement;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const darkmode = {};


  return <StyledThemeProvider theme={darkmode}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
