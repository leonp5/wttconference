import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.secondary};
`;
