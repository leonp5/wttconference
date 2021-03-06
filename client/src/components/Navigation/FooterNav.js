import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { FooterContainer, FooterColumn, MobileFooterColumn } from "../Container/FooterContainer";
import { BottomAnchor } from "./NavLinks";
import LoginModal from "../PopUp/LoginModal";
import { CloseButton } from "../Buttons/CloseButton";
import useCheckToken from "../../hooks/useCheckToken";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  height: 60px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.3);
`;

export default function FooterNav({ children }) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(true);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const token = useCheckToken();

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
      {show && (
        <FooterContainer>
          {children[0]}
          {children[1]}
        </FooterContainer>
      )}

      {show && <BottomAnchor onClick={handleOpen}>Orga-Login</BottomAnchor>}
      {!show && (
        <>
          <FooterContainer>
            {children[0]}
            <FooterColumn>
              <BottomAnchor onClick={logout}>Ausloggen</BottomAnchor>
              {children[2]}{" "}
            </FooterColumn>
            {children[1]}
          </FooterContainer>
          <MobileFooterColumn>
            <BottomAnchor onClick={logout}>Ausloggen</BottomAnchor>
            {children[2]}
          </MobileFooterColumn>
        </>
      )}
      {open && (
        <LoginModal handleClose={handleClose}>
          <CloseButton onClick={handleClose} />
        </LoginModal>
      )}
    </Footer>
  );
}

FooterNav.propTypes = {
  children: PropTypes.array
};
