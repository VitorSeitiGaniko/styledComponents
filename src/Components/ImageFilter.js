import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { StyledIcone } from "./UI";

export default (type) => {
  const Images = {
    Restaurante: <StyledIcone src={alimentacao} alt="Restaurante" />,
    Utilidades: <StyledIcone src={utilidades} alt="Utilidades" />,
    Saude: <StyledIcone src={saude} alt="Saude" />,
    Transporte: <StyledIcone src={transporte} alt="Transporte" />,
    Default: <StyledIcone src={outros} alt="Outros" />,
  };

  return Images[type] || Images.Default;
};
