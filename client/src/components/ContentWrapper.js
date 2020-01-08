import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 100%;
  background: ${props => props.theme.colors.secondary};
`;
