import React from 'react'
import { ReactComponent as AppleStoreSVG } from '../../../assets/imgs/apple.svg'
import { ReactComponent as GooglePlaySVG } from '../../../assets/imgs/google-soon.svg'
import Styled from './styled'

const CardFooter = ({ linkApple, linkGoogle }) => {

  return (
    <Styled.Footer>
      <Styled.Link href={linkApple} target="_blank">
        <AppleStoreSVG />
      </Styled.Link>
      <Styled.Link href={linkGoogle} target="_blank">
        <GooglePlaySVG />
      </Styled.Link>
    </Styled.Footer>
  )
}

export default CardFooter
