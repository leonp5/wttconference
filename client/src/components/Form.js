import React from "react";
import styled from "@emotion/styled";

const InputWrapper = styled.form`
  height: 90vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.secondary};
`;

function Form(props) {
  return <InputWrapper onSubmit={props.handleSubmit}>{props.children}</InputWrapper>;
}

export default Form;
