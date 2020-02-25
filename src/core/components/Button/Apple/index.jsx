import React from 'react'
import { ReactComponent as AppleStoreSVG } from 'core/assets/imgs/apple.svg'
import { ReactComponent as AppleStoreSoonSVG } from 'core/assets/imgs/apple-soon.svg'
import Styled from './styled'

const ButtonApple = ({ url }) => {

  const goTo = () => {
    window.open(url, '_blank')
  }

  const renderApple = () => (
    <Styled.Button onClick={goTo}>
      <AppleStoreSVG />
    </Styled.Button>
  )

  return url ? renderApple() : <AppleStoreSoonSVG />
}

export default ButtonApple
