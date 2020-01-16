import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { FooterContainer } from "../Container/FooterContainer";

const Footer = styled.footer`
  flex-grow: 0;
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
  return (
    <Footer>
      <FooterContainer>
        {children[0]}
        {children[1]}
      </FooterContainer>
      {children[2]}
    </Footer>
  );
}

FooterNav.propTypes = {
  children: PropTypes.array
};
