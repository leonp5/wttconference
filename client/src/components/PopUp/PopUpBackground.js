import styled from "@emotion/styled";

const PopUpBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.transparentBackground};
`;

export default PopUpBackground;
