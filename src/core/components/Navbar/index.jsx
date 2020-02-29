import React from 'react'
import { ReactComponent as InstagramSVG } from 'core/assets/imgs/instagram.svg'
import { ReactComponent as GitHubSVG } from 'core/assets/imgs/github.svg'
import { ReactComponent as LinkedInSVG } from 'core/assets/imgs/linkedin.svg'
import { ReactComponent as YouTubeSVG } from 'core/assets/imgs/youtube.svg'
import { ReactComponent as LogoSVG } from 'core/assets/imgs/logo.svg'
import Text from 'core/components/Text'
import Styled from './styled'

const Navbar = () => {

  return (
    <Styled.Wrapper>
      <Styled.Logo>
        <LogoSVG />
      </Styled.Logo>
      <Styled.Header>
        <Text type="h3"> Douglas Fernandes </Text>
        <Text type="h6"> App Engineer </Text>
      </Styled.Header>
      <Styled.Footer>
        <Styled.Link href="https://www.instagram.com/ifdouglas" target="_blank">
          <InstagramSVG />
        </Styled.Link>
        <Styled.Link href="https://www.github.com/ifdouglas" target="_blank">
          <GitHubSVG />
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/ifdouglas" target="_blank">
          <LinkedInSVG />
        </Styled.Link>
        <Styled.Link href="https://www.youtube.com/channel/UCULnRixNG6dyQb9lo2xLrpg" target="_blank">
          <YouTubeSVG />
        </Styled.Link>
      </Styled.Footer>
    </Styled.Wrapper>
  )
}

export default Navbar
