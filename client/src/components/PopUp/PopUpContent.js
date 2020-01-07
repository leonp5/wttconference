import styled from "@emotion/styled";

export const PopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 40px;
  background: ${props => props.theme.colors.secondary};
`;
