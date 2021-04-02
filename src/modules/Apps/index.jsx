import React from "react";
import Card from "shared/components/Card";
import CardHeader from "shared/components/Card/Header";
import CardBody from "shared/components/Card/Body";
import CardFooter from "shared/components/Card/Footer";
import ButtonApple from "shared/components/Button/Apple";
import ButtonGoogle from "shared/components/Button/Google";
import ButtonWeb from "shared/components/Button/Web";
import Slider from "shared/components/Slider";
import SliderItem from "shared/components/Slider/Item";
import products from "./data";
import Styled from "./styled";

const Apps = () => {
  console.log('Apps');
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
      {products.map(product => renderCard(product))}
    </Styled.Wrapper>
  );
};

export default Apps;
