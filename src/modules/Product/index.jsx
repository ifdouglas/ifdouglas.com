import React from "react";
import Card from "core/components/Card";
import CardHeader from "core/components/Card/Header";
import CardBody from "core/components/Card/Body";
import CardFooter from "core/components/Card/Footer";
import ButtonApple from "core/components/Button/Apple";
import ButtonGoogle from "core/components/Button/Google";
import Slider from "core/components/Slider";
import SliderItem from "core/components/Slider/Item";
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

  const renderFooter = ({ linkApple, linkGoogle }) => (
    <CardFooter>
      <ButtonApple url={linkApple} />
      <ButtonGoogle url={linkGoogle} />
    </CardFooter>
  );

  const renderCard = product => (
    <Card
      key={product}
      header={renderHeader(product)}
      body={renderBody(product)}
      footer={renderFooter(product)}
    />
  );

  return (
    <Styled.Wrapper>
      {products.map(product => renderCard(product))}
    </Styled.Wrapper>
  );
};

export default Product;
