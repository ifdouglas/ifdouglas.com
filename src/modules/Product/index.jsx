import React from 'react'
import Card from 'core/components/Card'
import CardHeader from 'core/components/Card/Header'
import CardBody from 'core/components/Card/Body'
import CardFooter from 'core/components/Card/Footer'
import Formatagram from './Formatagram'
import Styled from './styled'

const Product = () => {

  const products = [
    {
      title: "Formatagram",
      slogan: "Formate legendas com um clique",
      linkApple: "https://www.douglasfernandes.com.br",
      linkGoogle: "",
      component: <Formatagram />,
    }
  ]

  const renderHeader = ({ title, slogan }) => (
    <CardHeader
      title={title}
      slogan={slogan}
    />
  )

  const renderBody = ({ component }) => (
    <CardBody>
      { component }
    </CardBody>
  )

  const renderFooter = ({ linkApple, linkGoogle }) => (
    <CardFooter
      linkApple={linkApple}
      linkGoogle={linkGoogle}
    />
  )

  const renderCard = (product) => (
    <Card
      header={renderHeader(product)}
      body={renderBody(product)}
      footer={renderFooter(product)}
    />
  )

  return (
    <Styled.Wrapper>
      { products.map(product => renderCard(product)) }
    </Styled.Wrapper>
  )
}

export default Product
