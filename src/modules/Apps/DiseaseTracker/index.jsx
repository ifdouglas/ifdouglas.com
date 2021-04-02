import React from "react";
import { ReactComponent as CoronavirusSlide1SVG } from "shared/assets/imgs/coronavirus-slide1.svg";
import { ReactComponent as CoronavirusSlide2SVG } from "shared/assets/imgs/coronavirus-slide2.svg";
import { ReactComponent as CoronavirusSlide3SVG } from "shared/assets/imgs/coronavirus-slide3.svg";

export default [
  {
    image: <CoronavirusSlide1SVG />,
    title: "Escanear proximidades",
    description:
      "Descubra o caso de Coronavirus mais perto de você e previna-se."
  },
  {
    image: <CoronavirusSlide2SVG />,
    title: "Proliferação do vírus",
    description:
      "Utilizando os poderes do Google Maps é possível mostrar a proliferação do vírus ao redor do mundo."
  },
  {
    image: <CoronavirusSlide3SVG />,
    title: "Combate e prevenção",
    description:
      "Fornecendo dados para rastreamento em tempo real, ajudando equipes de saúde."
  }
];
