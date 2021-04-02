import React from "react";
import Text from "shared/components/Text";
import Styled from "./styled";

const SliderItem = ({ image, title, description }) => (
  <Styled.SliderItem>
    {image}
    <Text type="h2">{title}</Text>
    <Styled.Caption>
      <Text type="h5">{description}</Text>
    </Styled.Caption>
  </Styled.SliderItem>
);

export default SliderItem;
