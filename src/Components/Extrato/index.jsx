import React from "react";
import styled from "styled-components";
import { StyledBox, StyledButton } from "../UI";
import { extratoLista } from "../../info";
import Itens from "../Itens";

const Extrato = () => {
  return (
    <StyledBox>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <Itens key={id} type={type} from={from} value={value} date={date} />
      ))}
      <StyledButton>Ver mais</StyledButton>
    </StyledBox>
  );
};

export default Extrato;
