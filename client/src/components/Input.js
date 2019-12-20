import React from "react";
import styled from "@emotion/styled";

const InputField = styled.input`
  width: 250px;
  background: ${props => props.theme.colors.background};
  border: none;
  margin-top: 15px;
  padding: 10px;
`;

function Input(props) {
  return (
    <InputField
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></InputField>
  );
}

export default Input;
