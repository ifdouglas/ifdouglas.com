import styled, { css } from 'styled-components'

const Body = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  * {
    margin-bottom: 40px;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  justify-content: center;

  * {
    margin: 5px;
  }
`

const Header = styled.header`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Legend = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;
  font-variant: small-caps;
  font-size: 11px;
  margin-bottom: 30px;
`

const Subtitle = styled.span`
  font-size: 18px;
  font-family: RoobertLight;
`

const Title = styled.span`
  font-size: 33px;
  font-family: RoobertBold;
`

const Wrapper = styled.section`
  background: ${({ theme }) => theme.navbar.background};
  color: ${({ theme }) => theme.navbar.color};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 358px;
`

const Link = styled.a`
  text-decoration: none;
  cursor: default;

  :hover {
    transform: scale(1.1)
  }

  ${({ href }) => href && css`
    cursor: pointer;
  `}
`

export default {
  Body,
  Link,
  Footer,
  Header,
  Legend,
  Title,
  Subtitle,
  Wrapper,
}
