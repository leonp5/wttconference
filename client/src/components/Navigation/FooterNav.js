import React from "react";
import styled from "@emotion/styled";
import { BottomLink, FooterLink } from "./NavLink";

const Footer = styled.footer`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.3);
`;

const AnchorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export default function FooterNav() {
  return (
    <Footer>
      <AnchorWrapper>
        <FooterLink to="/impressum">Impressum</FooterLink>
        <FooterLink to="/Privacy">Datenschutz</FooterLink>
      </AnchorWrapper>
      <BottomLink to="/attendees">Orga-Login</BottomLink>
    </Footer>
  );
}
