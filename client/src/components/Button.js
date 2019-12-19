import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 80px;
  background: ${props => props.theme.colors.actioncolor};
  color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  border: none;
  margin: 10px;
  padding: 12px;
  text-align: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.6);
`;

function SubmitButton({ text }) {
  return <Button>{text}</Button>;
}

export default SubmitButton;
