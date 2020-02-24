import React from 'react'
import Styled from './styled'

const Link = ({ active, to, children }) => {

  return (
    <Styled.Link
      to={to}
      active={active}
    >
      { children }
    </Styled.Link>
  )
}

export default Link
