import React from "react";
import Card from "core/components/Card";
import CardHeader from "core/components/Card/Header";
import CardBody from "core/components/Card/Body";
import CardFooter from "core/components/Card/Footer";
import ButtonApple from "core/components/Button/Apple";
import ButtonGoogle from "core/components/Button/Google";
import ButtonWeb from "core/components/Button/Web";
import Slider from "core/components/Slider";
import SliderItem from "core/components/Slider/Item";
import MePNG from 'core/assets/imgs/me.png'
import products from "./data";
import Styled from "./styled";

const Product = () => {
  const renderHeader = ({ ...rest }) => <CardHeader {...rest} />;

  const renderBody = ({ data }) => (
    <CardBody>
      <Slider>
        {data.map(({ image, title, description }) => (
          <SliderItem
            key={title}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </Slider>
    </CardBody>
  );

  const renderFooter = ({ linkApple, linkGoogle, linkWeb }) => (
    <CardFooter>
      { linkApple && <ButtonApple url={linkApple} /> }
      { linkGoogle && <ButtonGoogle url={linkGoogle} /> }
      { linkWeb && <ButtonWeb url={linkWeb} /> }
    </CardFooter>
  );

  const renderCard = product => (
    <Card
      key={product.title}
      header={renderHeader(product)}
      body={renderBody(product)}
      footer={renderFooter(product)}
    />
  );

  return (
    <Styled.Wrapper>
      <Styled.SideAnimation>
        <img src={MePNG} alt="@ifdouglas" />
      </Styled.SideAnimation>
      {products.map(product => renderCard(product))}
      {/* <Styled.Me>
        <MeSVG />
      </Styled.Me> */}
    </Styled.Wrapper>
  );
};

export default Product;
