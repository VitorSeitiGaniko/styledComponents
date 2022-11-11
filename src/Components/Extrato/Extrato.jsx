import React from "react";
import styled from "styled-components";
import { StyledBox, StyledButton } from "../UI";
import { extratoLista } from "../../info";


const Extrato = () =>{
    return (
        <StyledBox>
            {extratoLista.updates.map(({id, type, value, date, from}) => (
                <div key={id}>
                    <div>{id}</div>
                    <div>{type}</div>
                    <div>{value}</div>
                    <div>{date}</div>
                    <div>{from}</div>
                </div>
            ))}
            <StyledButton>Ver mais</StyledButton>
        </StyledBox>
    )
}

export default Extrato