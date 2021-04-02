import React from "react";
import Button from "shared/components/Button/Default";
import { ReactComponent as ButtonOnline } from "shared/assets/imgs/button-online.svg";

const ButtonWeb = ({ url }) => {
  const renderButton = () => (
    <Button url={url}>
      <ButtonOnline />
    </Button>
  );

  const renderEmpty = () => <></>;

  return url ? renderButton() : renderEmpty();
};

export default ButtonWeb;
