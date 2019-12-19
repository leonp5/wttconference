import React from "react";
import styled from "@emotion/styled";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 5%;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  :focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

function BurgerButton() {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default BurgerButton;
