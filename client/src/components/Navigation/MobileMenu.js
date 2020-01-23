import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { mq } from "../MediaQueries";

const StyledMenu = styled.nav`
  display: none;
  ${mq[0]} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    height: 80%;
    margin-top: 1.5rem;
    top: 1.5rem;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    background: ${props => props.theme.colors.primary};
  }
`;

export default function MobileMenu({ open, onChange, children }) {
  return (
    <StyledMenu open={open} onClick={() => onChange(!open)}>
      {children}
    </StyledMenu>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.array
};
