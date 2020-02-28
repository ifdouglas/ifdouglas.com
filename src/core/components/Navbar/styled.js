import styled, { css } from 'styled-components'

const Body = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;

  * + * {
    margin-left: 5px;
  }
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  align-items: flex-start;
  margin-left: 30px;
`

const Legend = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-variant: small-caps;
  font-size: 11px;
`

const Subtitle = styled.span`
  font-size: 11px;
  font-family: RoobertLight;
`

const Title = styled.span`
  font-size: 21px;
  font-family: RoobertBold;
`

const Wrapper = styled.section`
  background: ${({ theme }) => theme.navbar.background};
  color: ${({ theme }) => theme.navbar.color};
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
`

const Link = styled.a`
  text-decoration: none;
  cursor: default;
  transform: scale(0.8);

  :hover {
    transform: scale(1);
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
