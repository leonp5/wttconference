import React from "react";
import styled from "@emotion/styled";
import Anchor from "./Anchor";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

const BottomLinks = styled(Anchor)`
  font-size: 1.1rem;
  padding: 10px;
`;

const Bottom = styled(Anchor)`
  font-size: 0.9rem;
`;

function FooterNav() {
  return (
    <Footer>
      <Wrapper>
        <BottomLinks>Impressum</BottomLinks>
        <BottomLinks>Datenschutz</BottomLinks>
      </Wrapper>
      <Bottom>Orga-Login</Bottom>
    </Footer>
  );
}

export default FooterNav;
