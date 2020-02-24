import styled from 'styled-components'

const Card = styled.div`
  width: 400px;
  height: 800px;
  padding: 20px;
  background: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.card.color};
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px ${({ theme }) => theme.card.shadow};
`

export default {
  Card,
}
