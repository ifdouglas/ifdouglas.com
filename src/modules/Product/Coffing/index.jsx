import React from "react";
import { ReactComponent as CoffinfTimeSVG } from "core/assets/imgs/coffing-time.svg";
import { ReactComponent as CoffingPresetsSVG } from "core/assets/imgs/coffing-presets.svg";
import { ReactComponent as CoffingSoundsSVG } from "core/assets/imgs/coffing-sounds.svg";
import { ReactComponent as CoffingNotifySVG } from "core/assets/imgs/coffing-notify.svg";

export default [
  {
    image: <CoffinfTimeSVG />,
    title: "Contador",
    description:
      "Escolha o tempo que deseja focar na sua atividade."
  },
  {
    image: <CoffingPresetsSVG />,
    title: "Presets de sons",
    description:
      "Escolha um conjunto de sons pré-definidos ou.."
  },
  {
    image: <CoffingSoundsSVG />,
    title: "Sons",
    description:
      "Combine sons que são relevantes pra você."
  },
  {
    image: <CoffingNotifySVG />,
    title: "Notificações extras",
    description:
      "Você ainda pode habilitar notificações extras para te lembrar de levantar ou beber água."
  }
];
