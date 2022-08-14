import { ThemeProvider as StyledThemeProvider } from "styled-components";

import React, { ReactElement } from "react";
import FontStyles from "./GlobalStyles";

interface ThemeProviderProps {
  children: ReactElement;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const darkmode = {};


  return <StyledThemeProvider theme={darkmode}>
    <FontStyles />
    {children}
  </StyledThemeProvider>;
};

export default ThemeProvider;
