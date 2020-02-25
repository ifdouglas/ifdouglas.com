import React from 'react'
import { ReactComponent as AppleStoreSVG } from 'core/assets/imgs/apple.svg'
import { ReactComponent as AppleStoreSoonSVG } from 'core/assets/imgs/apple-soon.svg'
import { ReactComponent as GooglePlaySVG } from 'core/assets/imgs/google-play.svg'
import { ReactComponent as GooglePlaySoonSVG } from 'core/assets/imgs/google-soon.svg'
import Styled from './styled'

const CardFooter = ({ linkApple, linkGoogle }) => {

  const renderApple = () => (
    <Styled.Link href={linkApple} target="_blank">
      <AppleStoreSVG />
    </Styled.Link>
  )

  const renderGoogle = () => (
    <Styled.Link href={linkGoogle} target="_blank">
      <GooglePlaySVG />
    </Styled.Link>
  )

  return (
    <Styled.Footer>
      { linkApple ? renderApple() : <AppleStoreSoonSVG /> }
      { linkApple ? renderGoogle() : <GooglePlaySoonSVG /> }
    </Styled.Footer>
  )
}

export default CardFooter
