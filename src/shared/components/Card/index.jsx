import React from "react";
import Styled from "./styled";

const Card = ({ header, body, footer }) => {
  return (
    <Styled.Card>
      {header}
      {body}
      {footer}
    </Styled.Card>
  );
};

export default Card;
