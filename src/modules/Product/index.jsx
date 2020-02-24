import React from 'react'
import Card from 'core/components/Card'
import CardHeader from 'core/components/Card/Header'
import CardBody from 'core/components/Card/Body'
import CardFooter from 'core/components/Card/Footer'
import Formatagram from './Formatagram'
import Styled from './styled'

const Product = () => {

  const renderHeader = (
    <CardHeader
      title='Formatagram'
      slogan="Formate legendas com um clique"
    />
  )

  const renderBody = (
    <CardBody>
      <Formatagram />
    </CardBody>
  )

  const renderFooter = (
    <CardFooter
      linkApple="https://www.douglasfernandes.com.br"
      linkGoogle=""
    />
  )

  return (
    <Styled.Wrapper>
      <Card
        header={renderHeader}
        body={renderBody}
        footer={renderFooter}
      />
    </Styled.Wrapper>
  )
}

export default Product
