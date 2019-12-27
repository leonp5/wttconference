import styled from "@emotion/styled";

const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: ${props => props.theme.colors.secondary};
`;

export default PopUp;
