import styled, { css } from 'styled-components'


const Header = styled.section`
  display: flex;
  flex-direction: row;
`

const Title = styled.section`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  align-items: flex-start;
  margin: 4px 10px;
`

const Body = styled.section`
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
  margin-right: 20px;

  * + * {
    margin-left: 5px;
  }
`

const Legend = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-variant: small-caps;
  font-size: 11px;
`

const Logo = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.section`
  background: ${({ theme }) => theme.navbar.background};
  color: ${({ theme }) => theme.navbar.color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  box-shadow: 0px 2px 4px 0px ${({ theme }) => theme.navbar.shadow};
`

const Link = styled.a`
  text-decoration: none;
  cursor: default;
  transform: scale(0.8);
  transition: 0.4s;

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
  Title,
  Header,
  Legend,
  Logo,
  Wrapper,
}
