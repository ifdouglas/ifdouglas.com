import styled from "styled-components";
import Slider from "react-slick";

const SliderWrapper = styled(Slider)`
  width: 330px;
  margin-left: 15px;

  svg {
    margin-bottom: 50px;
  }
`;

export default {
  Slider: SliderWrapper
};
