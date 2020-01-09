import React from "react";
import styled from "@emotion/styled";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import BurgerButton from "../Buttons/BurgerButton";
import MobileMenu from "./MobileMenu";

const Header = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;
  z-index: 1;
  height: 70px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
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
    </Header>
  );
}
