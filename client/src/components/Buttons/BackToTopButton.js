import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 15px;
  bottom: 40px;
  height: 35px;
  width: 35px;
  border: none;
  z-index: 2;
  border-radius: 50%;
  background: ${props => props.theme.colors.action};
  cursor: pointer;
  opacity: 0.9;

  i {
    border: solid ${props => props.theme.colors.secondary};
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-135deg);
  }
`;

export default function BackToTopButton() {
  const [scrollPositon, setScrollPosition] = React.useState();
  const [showButton, setShowButton] = React.useState();

  React.useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);

      if (scrollPositon > 400) {
        setShowButton(true);
      }
      if (scrollPositon < 419) {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPositon]);

  function ScrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
      {showButton && (
        <StyledButton onClick={ScrollUp}>
          <i />
        </StyledButton>
      )}
    </>
  );
}
