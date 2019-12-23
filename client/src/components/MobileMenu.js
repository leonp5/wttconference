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

  a {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    transition: color 0.3s linear;
    margin: 5px;

    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.primary};
      cursor: pointer;
    }
  }
`;

function MobileMenu({ open }) {
  return (
    <StyledMenu open={open}>
      <a>Home</a>
      <a>Programm</a>
      <a>Workshops</a>
      <a>Anmeldung</a>
      <a>Mitfahren</a>
      <a>Über uns</a>
    </StyledMenu>
  );
}

export default MobileMenu;
