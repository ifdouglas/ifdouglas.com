import React from 'react'
import Link from '../Link'
import { BrowserRouter as Router } from "react-router-dom"
import { PATH_ROOT } from '../../constants/paths'
import { ReactComponent as InstagramSVG } from '../../assets/imgs/instagram.svg'
import { ReactComponent as GitHubSVG } from '../../assets/imgs/github.svg'
import { ReactComponent as LinkedInSVG } from '../../assets/imgs/linkedin.svg'
import { ReactComponent as YouTubeSVG } from '../../assets/imgs/youtube.svg'
import Styled from './styled'

const Navbar = () => {

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>
          Douglas Fernandes  
        </Styled.Title>
        <Styled.Subtitle>
          App Engineer 
        </Styled.Subtitle>
      </Styled.Header>
      <Styled.Body>
        <Router>
          <Link active to={PATH_ROOT}>
            Produtos
          </Link>
        </Router>
      </Styled.Body>
      <Styled.Footer>
        <Styled.Link href="https://instagram.com/ifdouglas">
          <InstagramSVG />
        </Styled.Link>
        <Styled.Link href="https://github.com/ifdouglas">
          <GitHubSVG />
        </Styled.Link>
        <Styled.Link href="https://linkedin.com/in/ifdouglas">
          <LinkedInSVG />
        </Styled.Link>
        <Styled.Link href="https://www.youtube.com/channel/UCULnRixNG6dyQb9lo2xLrpg">
          <YouTubeSVG />
        </Styled.Link>
      </Styled.Footer>
      <Styled.Legend>
        © COPYRIGHT 2020
      </Styled.Legend>
    </Styled.Wrapper>
  )
}

export default Navbar
