import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "core/hooks/useDarkMode";
import Toggle from "./core/components/Toggle";
import Navbar from "core/components/Navbar";
import Product from "modules/Product";
// import Routes from './modules/Routes'
import { lightTheme, darkTheme } from "core/assets/styles/theme";
import { GlobalStyles } from "core/assets/styles/global";
import Styled from "./styled";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Styled.Wrapper>
        {/* <Router> */}
        <GlobalStyles />
        <Navbar>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Navbar>
        <Product />
        {/* <Routes /> */}
        {/* </Router> */}
      </Styled.Wrapper>
    </ThemeProvider>
  );
}

export default App;
