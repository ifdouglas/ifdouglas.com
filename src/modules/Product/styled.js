import styled, { keyframes } from "styled-components";
import { respondTo } from 'core/assets/styles/_respontTo';

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 20px 100px;

  ${respondTo.laptop`
		flex-direction: column;
	`}

  > * + * {
    margin-left: 20px;

    ${respondTo.laptop`
      margin-top: 40px;
    `}
  }
`;

const run = keyframes`
  0% { left: -100px;}
  50% { left: -20px;}
  100%{ left: -4px;}
`;

const SideAnimation = styled.section`
  position: absolute;
  animation: ease-in-out infinite alternate;
  animation-name: ${run};
  animation-duration: 5s;
  animation-delay: 3s;
  left: -100px;
  z-index: 1;

  svg {
    height: 500px;
  }
`;

export default {
  SideAnimation,
  Wrapper
};
