import React from "react";
import styled from "@emotion/styled";

import Input from "./Input";

const InputWrapper = styled.div`
  height: 90vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.secondary};
`;

function FormInput() {
  return (
    <InputWrapper>
      <Input placeholder="Name, Vorname"></Input>
      <Input placeholder="Ort, PLZ"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Telefon"></Input>
      <Input placeholder="Workshop 1 (Theorie)"></Input>
      <Input placeholder="Workshop 2 (Theorie)"></Input>
      <Input placeholder="Workshop 3 (Praktisch)"></Input>
      <Input placeholder="Sonstiges"></Input>
    </InputWrapper>
  );
}

export default FormInput;
