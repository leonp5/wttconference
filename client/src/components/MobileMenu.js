import React from "react";
import styled from "@emotion/styled";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  height: 250px;
  padding: 2rem;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  background: ${props => props.theme.colors.primary};

  a {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    transition: color 0.3s linear;
    margin: 5px;

    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.actioncolor};
    }
  }
`;

function MobileMenu({ children }) {
  return <Container>{children}</Container>;
}

export default MobileMenu;
