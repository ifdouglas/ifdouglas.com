import React from 'react'
import Text from 'core/components/Text'
import { ReactComponent as FormatagramSlide1SVG } from 'core/assets/imgs/formatagram-slide1.svg'
import { ReactComponent as FormatagramSlide2SVG } from 'core/assets/imgs/formatagram-slide2.svg'
import { ReactComponent as FormatagramSlide3SVG } from 'core/assets/imgs/formatagram-slide3.svg'
import Styled from './styled'

const Formatagram = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Styled.Slide {...settings}>
      <Styled.SlideItem>
        <FormatagramSlide1SVG />
        <Text type="h2">
          Escreva sua legenda
        </Text>
        <Styled.Caption>
          <Text type="h5">
            Coloque quantos espaços quiser,
            que nós garantimos que eles
            vão estar lá quando você postar.
          </Text>
        </Styled.Caption>
      </Styled.SlideItem>
      <Styled.SlideItem>
        <FormatagramSlide2SVG />
        <Text type="h2">
          Leitura agradável
        </Text>
        <Styled.Caption>
          <Text type="h5">
            Sem pontos perdidos no seu texto,
            ler volta a ser algo natural e agradável.
            Seu público agradece.
          </Text>
        </Styled.Caption>
      </Styled.SlideItem>
      <Styled.SlideItem>
        <FormatagramSlide3SVG />
        <Text type="h2">
          Aumente seu engajamento
        </Text>
        <Styled.Caption>
          <Text type="h5">
            O tempo que você perdia editando legenda,
            agora é convertido em mais tempo
            para engajamento do seu público.
          </Text>
        </Styled.Caption>
      </Styled.SlideItem>
    </Styled.Slide>
  )
}

export default Formatagram
