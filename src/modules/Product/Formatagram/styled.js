import styled from 'styled-components'
import Slider from 'react-slick'

const Slide = styled(Slider)`
  width: 330px;
  margin-left: 15px;

  svg {
    margin-bottom: 50px;
  }
`

const Caption = styled.div`
  width: 290px;
  margin-top: 10px;

  div {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const SlideItem = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  height: 500px;
`

export default {
  Caption,
  Slide,
  SlideItem,
}