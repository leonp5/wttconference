import React from "react";
import styled from "@emotion/styled";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 1;
  height: 250px;
  margin-top: 2rem;
  top: 1.5rem;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  background: ${props => props.theme.colors.primary};
`;

export default function MobileMenu({ open, onChange, children }) {
  return (
    <StyledMenu open={open} onClick={() => onChange(!open)}>
      {children}
    </StyledMenu>
  );
}
