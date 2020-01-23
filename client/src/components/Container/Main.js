import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(90vh - 60px);
  background: ${props => props.theme.colors.secondary};
`;
