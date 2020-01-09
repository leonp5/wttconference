import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "./NavLink";

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

const Anchor = styled(NavLink)`
  font-size: 1.1rem;
  padding: 10px;
  margin: 0;
`;
const BottomLink = styled(NavLink)`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.8rem;
  padding: 6px;
  margin: 0;
`;

export default function FooterNav() {
  return (
    <Footer>
      <AnchorWrapper>
        <Anchor to="/impressum">Impressum</Anchor>
        <Anchor to="/Privacy">Datenschutz</Anchor>
      </AnchorWrapper>
      <BottomLink to="/attendees">Orga-Login</BottomLink>
    </Footer>
  );
}
