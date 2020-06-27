import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  > * + * {
    margin-left: 10px;
  }
`;

export default {
  Footer
};
