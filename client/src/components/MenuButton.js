import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  height: 30px;
  width: 100%;
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: none;
  :hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.actioncolor};
  }
`;

function MenuButton({ text }) {
  return <Button>{text}</Button>;
}

export default MenuButton;
