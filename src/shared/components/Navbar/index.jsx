import React from "react";
import { ReactComponent as InstagramSVG } from "shared/assets/imgs/instagram.svg";
import { ReactComponent as GitHubSVG } from "shared/assets/imgs/github.svg";
import { ReactComponent as LinkedInSVG } from "shared/assets/imgs/linkedin.svg";
// import { ReactComponent as YouTubeSVG } from "shared/assets/imgs/youtube.svg";
import { ReactComponent as TwitterSVG } from "shared/assets/imgs/twitter.svg";
import { ReactComponent as MediumSVG } from "shared/assets/imgs/medium.svg";
import { ReactComponent as LogoSVG } from "shared/assets/imgs/logo.svg";
import Link from "shared/components/Link";
import Text from "shared/components/Text";
import routes from "shared/constants/paths";
import Styled from "./styled";

const Navbar = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo>
          <LogoSVG size={30} />
        </Styled.Logo>
        <Styled.Title>
          <Text type="h3"> TUNTZ </Text>
          <Text type="h6"> Tecnologia e Desenvolvimento </Text>
        </Styled.Title>
      </Styled.Header>
      <Styled.Body>
        {/* <Link to={routes.content} active={}>
          <Text type="h3"> Content </Text>
        </Link> */}
        {/* <Link to={routes.apps} active={false}>
          <Text type="h3"> Apps </Text>
        </Link> */}
      </Styled.Body>
      <Styled.Footer>
        <Styled.Link href="https://www.twitter.com/ifdouglas" target="_blank">
          <TwitterSVG />
        </Styled.Link>
        <Styled.Link href="https://medium.com/@tuntz" target="_blank">
          <MediumSVG />
        </Styled.Link>
        <Styled.Link href="https://www.instagram.com/ifdouglas" target="_blank">
          <InstagramSVG />
        </Styled.Link>
        <Styled.Link href="https://www.github.com/ifdouglas" target="_blank">
          <GitHubSVG />
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/ifdouglas"
          target="_blank"
        >
          <LinkedInSVG />
        </Styled.Link>
        {/* <Styled.Link
          href="https://www.youtube.com/channel/UCULnRixNG6dyQb9lo2xLrpg"
          target="_blank"
        >
          <YouTubeSVG />
        </Styled.Link> */}
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Navbar;
