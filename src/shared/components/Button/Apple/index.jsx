import React from "react";
import Button from "shared/components/Button/Default";
import Styled from "./styled";

const ButtonApple = ({ url }) => {
  const renderButton = () => (
    <Button url={url}>
      <Styled.DefaultSVG />
    </Button>
  );

  const renderEmpty = () => <Styled.SoonSVG />;

  return url !== '#' ? renderButton() : renderEmpty();
};

export default ButtonApple;
