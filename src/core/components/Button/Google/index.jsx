import React from "react";
import Button from "core/components/Button/Default";
import Styled from "./styled";

const ButtonGoogle = ({ url }) => {
  const renderButton = () => (
    <Button url={url}>
      <Styled.DefaultSVG />
    </Button>
  );

  const renderEmpty = () => <Styled.SoonSVG />;

  return url !== '#' ? renderButton() : renderEmpty();
};

export default ButtonGoogle;
