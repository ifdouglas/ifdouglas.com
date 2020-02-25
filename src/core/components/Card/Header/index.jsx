import React from 'react'
import PropTypes from 'prop-types'
import Text from 'core/components/Text'
import { ReactComponent as NoLogoSVG } from 'core/assets/imgs/no-logo.svg'
import Styled from './styled'

const CardHeader = ({ logo, title, slogan }) => {

  const renderLogo = () => (
    <Styled.Logo>
      { logo }
    </Styled.Logo>
  )

  const renderTitle = () => <Text type="h1"> { title } </Text>

  const renderSlogan = () => <Text type="h5"> { slogan } </Text>

  return (
    <Styled.Header>
      { renderLogo() }
      <Styled.Title>
        { renderTitle() }
        { renderSlogan() }
      </Styled.Title>
    </Styled.Header>
  )
}

CardHeader.defaultProps = {
  logo: <NoLogoSVG />,
  title: '-',
  slogan: '-',
}

CardHeader.propTypes = {
  logo: PropTypes.node,
  title: PropTypes.string,
  sloagan: PropTypes.string,
}

export default CardHeader
