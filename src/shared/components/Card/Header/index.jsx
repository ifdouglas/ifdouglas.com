import React from "react";
import PropTypes from "prop-types";
import Text from "shared/components/Text";
import { ReactComponent as NoLogoSVG } from "shared/assets/imgs/no-logo.svg";
import Styled from "./styled";

const CardHeader = ({ logo, title, subtitle, technology, version }) => {
  const renderLogo = () => <Styled.Logo>{logo}</Styled.Logo>;

  const renderTitle = () => <Text type="h1"> {title} </Text>;

  const renderSubtitle = () => <Text type="h3"> {subtitle} </Text>;

  const renderVersion = () => <Text type="h6"> {version} </Text>;

  const renderTechnology = () => <Text type="h6"> {technology} </Text>;

  return (
    <Styled.Header>
      {renderLogo()}
      <Styled.Title>
        {renderTitle()}
        {renderSubtitle()}
        {renderVersion()}
        {renderTechnology()}
      </Styled.Title>
    </Styled.Header>
  );
};

CardHeader.defaultProps = {
  logo: <NoLogoSVG />,
  title: "-",
  version: "v0",
  technology: "-"
};

CardHeader.propTypes = {
  logo: PropTypes.node,
  title: PropTypes.string,
  version: PropTypes.string,
  technology: PropTypes.string
};

export default CardHeader;
