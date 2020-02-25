import React from 'react'
import { ReactComponent as GooglePlaySVG } from 'core/assets/imgs/google-play.svg'
import { ReactComponent as GooglePlaySoonSVG } from 'core/assets/imgs/google-soon.svg'
import Styled from './styled'

const ButtonGoogle = ({ url }) => {

  const goTo = () => {
    window.open(url, '_blank')
  }

  const renderApple = () => (
    <Styled.Button onClick={goTo}>
      <GooglePlaySVG />
    </Styled.Button>
  )

  return url ? renderApple() : <GooglePlaySoonSVG />
}

export default ButtonGoogle
