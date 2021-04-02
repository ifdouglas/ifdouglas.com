import React from 'react'
import Styled from './styled'

const Slider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Styled.Slider
      {...settings}
    >
      { children }
    </Styled.Slider>
  )
}

export default Slider
