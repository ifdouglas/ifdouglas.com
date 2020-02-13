import styled, { css } from 'styled-components'

const Button = styled.button`
  height: 70px;
  font-size: 23px;
  border: none;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 10 30 0;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 50);
  background: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.button.hover.background};
    color: ${({ theme }) => theme.button.hover.color};
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 50);
  }

  ${({ active }) => active && css`
    background: ${({ theme }) => theme.button.active.background};
    color: ${({ theme }) => theme.button.active.color};
    box-shadow: -2px 2px 0px 0px rgba(0, 0, 0, 50);
    width: 305px;
    height: 120px;
    margin-right: -55px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.button.active.background};
      color: ${({ theme }) => theme.button.active.color};
      box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 50);
    }
  `}
`

export default {
  Button,
}
