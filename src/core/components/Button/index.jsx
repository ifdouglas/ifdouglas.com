import React from 'react'
import Styled from './styled'

const Button = ({ active, children }) => {

  return (
    <Styled.Button
      active={active}
    >
      { children }
    </Styled.Button>
  )
}

export default Button
