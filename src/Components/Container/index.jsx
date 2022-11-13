import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const StyledContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const StyledConteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <StyledContainer>
      <Titulo nome={"Olá Fulanokkkkkk!"}></Titulo>
      {/* <Titulo>Olá Fulanokkkkkk!</Titulo> */}
      <StyledConteudo>
        <Conta />
        <Extrato />
      </StyledConteudo>
    </StyledContainer>
  );
};

export default Container;
