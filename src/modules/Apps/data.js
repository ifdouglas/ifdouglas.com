import React from "react";
import Formatagram from "./Formatagram";
import Coffing from "./Coffing";
import { ReactComponent as FormatagramSVG } from "shared/assets/imgs/formatagram.svg";
import { ReactComponent as CoffingSVG } from "shared/assets/imgs/coffing.svg";

export default [
  {
    logo: <FormatagramSVG />,
    title: "Formatagram",
    version: "Versão 1.2.1 • 04 de Março de 2020",
    technology: "Formate legendas com espaços e parágrafos",
    linkApple: "https://apps.apple.com/br/app/formatagram/id1500141159",
    linkGoogle:
      "https://play.google.com/store/apps/details?id=app.tuntz.formatagram",
    data: Formatagram
  },
  {
    logo: <CoffingSVG />,
    title: "Coffing",
    version: "Versão 1.1 • 09 de Fevereiro de 2021",
    technology: "Gerencie seu tempo e mantenha o foco com sons simulando ambientes",
    linkWeb: "https://coffing.tuntz.app",
    data: Coffing
  }
];
