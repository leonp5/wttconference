import React from "react";
import styled from "@emotion/styled";
import { BottomLink } from "./NavLink";

const Footer = styled.footer`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.3);
`;

export default function FooterNav() {
  return (
    <Footer>
      <BottomLink to="/attendees">Orga-Login</BottomLink>
    </Footer>
  );
}
