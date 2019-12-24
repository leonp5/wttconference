import React from "react";
import styled from "@emotion/styled";

import Anchor from "./Anchor";

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

const MenuAnchor = styled(Anchor)`
  font-size: 1.5rem;
  text-decoration: none;
  margin: 5px;
`;
function MobileMenu({ open }) {
  return (
    <StyledMenu open={open}>
      <MenuAnchor href="/">Home</MenuAnchor>
      <MenuAnchor href="/program">Programm</MenuAnchor>
      <MenuAnchor href="/workshops">Workshops</MenuAnchor>
      <MenuAnchor href="registration">Anmeldung</MenuAnchor>
      <MenuAnchor href="/lift">Mitfahren</MenuAnchor>
      <MenuAnchor href="/about">Über uns</MenuAnchor>
    </StyledMenu>
  );
}

export default MobileMenu;
