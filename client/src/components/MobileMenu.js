import React from "react";
import styled from "@emotion/styled";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  height: 250px;
  padding: 2rem;
  top: 1.8rem;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  background: ${props => props.theme.colors.primary};
`;

function MobileMenu({ open, children }) {
  return <StyledMenu open={open}>{children}</StyledMenu>;
}

export default MobileMenu;
