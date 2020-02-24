import styled, { css } from 'styled-components'

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const Link = styled.a`
  text-decoration: none;
  cursor: default;

  ${({ href }) => href && css`
    cursor: pointer;

    :hover {
      transform: scale(1.1)
    }
  `}
`

export default {
  Footer,
  Link,
}