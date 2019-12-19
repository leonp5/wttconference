import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  padding: 30px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
`;

function MobileMenu({ children }) {
  return <Container>{children}</Container>;
}

export default MobileMenu;
