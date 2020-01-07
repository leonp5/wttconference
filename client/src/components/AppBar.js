import React from "react";
import styled from "@emotion/styled";

import useOnClickOutside from "../hooks/useOnClickOutside";
import BurgerButton from "./Buttons/BurgerButton";
import MobileMenu from "./MobileMenu";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100vw;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
`;

// const Mobile = styled.div`
//   @media (min-width: 576px) {
//     display: none;
//   }
// `;

function AppBar({ children }) {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container ref={node}>
      <BurgerButton open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen}>
        {children}
      </MobileMenu>
    </Container>
  );
}

export default AppBar;
