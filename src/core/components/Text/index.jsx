import React from 'react'
import Styled from './styled'

const Text = ({ type, children, ...props }) => {  
  return (
    <Styled.Text { ...props } type={type} >
      { children }
    </Styled.Text>
  )
}

export default Text
