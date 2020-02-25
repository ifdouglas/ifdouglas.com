import React from 'react'
import Text from 'core/components/Text'
import { ReactComponent as FormatagramSVG } from 'core/assets/imgs/formatagram.svg'
import Styled from './styled'

const CardHeader = ({ title, slogan }) => {

  return (
    <Styled.Header>
      <Styled.Logo>
        <FormatagramSVG />
      </Styled.Logo>
      <Styled.Title>
        <Text type="h1"> { title } </Text>
        <Text type="h5"> { slogan } </Text>
      </Styled.Title>
    </Styled.Header>
  )
}

export default CardHeader
