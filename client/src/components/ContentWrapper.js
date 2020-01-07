import styled from "@emotion/styled";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 100vh;
  background: ${props => props.theme.colors.secondary};
`;

export default ContentWrapper;
