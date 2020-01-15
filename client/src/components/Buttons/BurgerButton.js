import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { mq } from "../MediaQueries";

const StyledBurger = styled.button`
  display: none;
  ${mq[0]} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 12px;
    right: 15px;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;

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

      :first-of-type {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-of-type(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      }

      :nth-of-type(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export default function BurgerButton({ open, onChange }) {
  return (
    <StyledBurger open={open} onClick={() => onChange(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

BurgerButton.propTypes = {
  open: PropTypes.bool,
  onChange: PropTypes.func
};
