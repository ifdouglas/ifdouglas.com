import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  height: 70px;
`

export default {
  Header,
  Logo,
  Title,
}