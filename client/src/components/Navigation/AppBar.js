import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import BurgerButton from "../Buttons/BurgerButton";
import MobileMenu from "./MobileMenu";
import { HeaderNav } from "./HeaderNav";

const Header = styled.div`
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 70px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
`;

export default function AppBar({ children }) {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Header ref={node}>
      <BurgerButton open={open} onChange={open => setOpen(open)} />
      <MobileMenu open={open} onChange={open => setOpen(open)}>
        {children}
      </MobileMenu>
      <HeaderNav>
        {children[0]}
        {children[1]}
        {children[2]}
        {children[3]}
        {children[4]}
        {children[5]}
      </HeaderNav>
    </Header>
  );
}

AppBar.propTypes = {
  children: PropTypes.array
};
