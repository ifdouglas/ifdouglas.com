import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './hooks/useDarkMode'
import Toggle from './components/Toggle'
import Navbar from './components/Navbar'
import Content from './modules/Content'
import Product from './modules/Product'
import { PATH_CONTENT, PATH_PRODUCTS } from './assets/constants/paths'
import { lightTheme, darkTheme } from './assets/styles/theme'
import { GlobalStyles } from './assets/styles/global'
import Styled from './styled'

function App() {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Styled.Wrapper>
        <Router>
          <GlobalStyles />
          <Navbar />
          <Toggle theme={theme} toggleTheme={toggleTheme} />

          <Switch>
            <Route path={PATH_CONTENT}>
              <Content />
            </Route>
            <Route path={PATH_PRODUCTS}>
              <Product />
            </Route>
          </Switch>
        </Router>
      </Styled.Wrapper>
    </ThemeProvider>
  )
}

export default App