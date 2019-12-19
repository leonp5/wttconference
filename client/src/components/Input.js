import React from "react";
import styled from "@emotion/styled";

const InputField = styled.input`
  width: 250px;
  background: ${props => props.theme.colors.background};
  border: none;
  margin-top: 15px;
  padding: 10px;
`;

function Input({ placeholder }) {
  return <InputField type="text" placeholder={placeholder}></InputField>;
}

export default Input;
