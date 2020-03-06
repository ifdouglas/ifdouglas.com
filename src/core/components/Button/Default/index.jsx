import React from "react";
import Styled from "./styled";

const ButtonGoogle = ({ url, children }) => {
  const goTo = () => {
    window.open(url, "_blank");
  };

  return <Styled.Button onClick={goTo}>{children}</Styled.Button>;
};

export default ButtonGoogle;
