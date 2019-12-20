import React from "react";
import styled from "@emotion/styled";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";

const Container = styled.div`
  display: flex;
  align-items: center;
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

function AppBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Container>
        <BurgerButton open={open} setOpen={setOpen} />
        <MobileMenu open={open} setOpen={setOpen} />
      </Container>
    </>
  );
}

export default AppBar;
