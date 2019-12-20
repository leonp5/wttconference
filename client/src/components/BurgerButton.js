import React from "react";
import styled from "@emotion/styled";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 1.2rem;
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

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

function BurgerButton({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default BurgerButton;
