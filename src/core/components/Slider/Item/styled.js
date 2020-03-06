import styled from "styled-components";

const SliderItem = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  height: 500px;
`;

const Caption = styled.div`
  width: 290px;
  margin-top: 10px;

  div {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export default {
  SliderItem,
  Caption
};
