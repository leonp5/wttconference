import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { FooterContainer } from "../Container/FooterContainer";
import { BottomLink } from "./NavLinks";
import LoginModal from "../PopUp/LoginModal";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.3);
`;

export default function FooterNav({ children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Footer>
      <FooterContainer>
        {children[0]}
        {children[1]}
      </FooterContainer>
      <BottomLink onClick={() => setOpen(true)}>Orga-Login</BottomLink>
      {open && (
        <LoginModal>
          <button onClick={() => setOpen(false)}>Close</button>
        </LoginModal>
      )}
    </Footer>
  );
}

FooterNav.propTypes = {
  children: PropTypes.array
};
