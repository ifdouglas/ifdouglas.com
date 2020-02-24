import styled, { css } from 'styled-components'
import { NavLink as ComponentNavLink } from 'react-router-dom'

const Link = styled(ComponentNavLink)`
  height: 70px;
  font-size: 23px;
  border: none;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 10 30 0;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 50);
  background: ${({ theme }) => theme.link.background};
  color: ${({ theme }) => theme.link.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.link.hover.background};
    color: ${({ theme }) => theme.link.hover.color};
    box-shadow: 0px 10px 30px 0px ${({ theme }) => theme.link.shadow};
  }

  ${({ active }) => active && css`
    background: ${({ theme }) => theme.link.active.background};
    color: ${({ theme }) => theme.link.active.color};
    box-shadow: -30px 10px 30px 0px ${({ theme }) => theme.link.active.shadow};
    width: 305px;
    height: 120px;
    margin-right: -55px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.link.active.background};
      color: ${({ theme }) => theme.link.active.color};
      box-shadow: -10px 10px 10px 0px ${({ theme }) => theme.link.shadow};
    }
  `}
`

export default {
  Link,
}
