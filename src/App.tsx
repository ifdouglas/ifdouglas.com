import { ThemeProvider } from "styled-components";
import Routes from 'modules/Routes'
import { darkTheme } from "shared/assets/styles/theme";
import { GlobalStyles } from "shared/assets/styles/global";

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

export default App;
