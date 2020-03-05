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

export default {
  Wrapper
};
