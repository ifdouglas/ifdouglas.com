import styled, { css } from 'styled-components'

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const Link = styled.a`
  text-decoration: none,

  ${({ href }) => !href && css`
    cursor: help;
  `}
`

export default {
  Footer,
  Link,
}