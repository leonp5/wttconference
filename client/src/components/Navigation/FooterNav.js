import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState();

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const token = sessionStorage.getItem("token:");

  function logout() {
    sessionStorage.removeItem("token:");
    history.push("/");
  }

  React.useEffect(() => {
    if (!token) {
      setShow(true);
    }
    if (token) {
      setShow(false);
    }
  }, [token]);

  return (
    <Footer>
      <FooterContainer>
        {children[0]}
        {children[1]}
      </FooterContainer>
      {show && <BottomLink onClick={handleOpen}>Orga-Login</BottomLink>}
      {!show && <BottomLink onClick={logout}>Ausloggen</BottomLink>}
      {open && (
        <LoginModal handleClose={handleClose}>
          <button onClick={handleClose}>Close</button>
        </LoginModal>
      )}
    </Footer>
  );
}

FooterNav.propTypes = {
  children: PropTypes.array
};
