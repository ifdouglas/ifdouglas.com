import styled, { css } from 'styled-components'

const Text = styled.div`
  display: flex;
  flex-direction: row;

  ${({ type }) => type === 'h1' && css`
    font-size: 30px;
  `}

  ${({ type }) => type === 'h2' && css`
    font-size: 25px;
  `}

  ${({ type }) => type === 'h3' && css`
    font-size: 21px;
  `}

  ${({ type }) => type === 'h4' && css`
    font-size: 17px;
  `}

  ${({ type }) => type === 'h5' && css`
    font-size: 15px;
  `}

  ${({ type }) => type === 'h6' && css`
    font-size: 11px;
  `}
`

export default {
  Text,
}
