import styled, { keyframes } from "styled-components";

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 100px;

  > * + * {
    margin-left: 20px;
  }
`;

const run = keyframes`
  0% { left: -300px;}
  100%{ left: -74px;}
`;

const Me = styled.section`
  position: absolute;
  animation: ease-in-out infinite alternate;
  animation-name: ${run};
  animation-duration: 5s;
  left: -300px;
  z-index: 1;

  svg {
    height: 700px;
  }
`;

export default {
  Me,
  Wrapper
};
