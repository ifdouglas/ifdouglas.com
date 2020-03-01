import { createGlobalStyle } from 'styled-components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Roobert from '../fonts/Roobert-Regular.otf'
import RoobertLight from '../fonts/Roobert-Light.otf'
import RoobertMedium from '../fonts/Roobert-Medium.otf'
import RoobertBold from '../fonts/Roobert-Bold.otf'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Roobert;
    src: url(${Roobert});
  }

  @font-face {
    font-family: RoobertLight;
    src: url(${RoobertLight});
  }

  @font-face {
    font-family: RoobertMedium;
    src: url(${RoobertMedium});
  }

  @font-face {
    font-family: RoobertBold;
    src: url(${RoobertBold});
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    transition: all 0.25s linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // overrides for react-slick lib
  .slick-dots > li > button:before {
    color: ${({ theme }) => theme.dots} !important;
  }

  .slick-prev::before, .slick-next::before {
    color: ${({ theme }) => theme.dots} !important;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`
