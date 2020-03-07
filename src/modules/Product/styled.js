import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 100px;

  > * + * {
    margin-left: 20px;
  }
`;

const Me = styled.section`
  position: absolute;
  left: -74px;
  z-index: 1;

  svg {
    height: 700px;
  }
`;

export default {
  Me,
  Wrapper
};
