import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
`;

export const TextWrapper = styled(ContentWrapper)`
  max-width: 800px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
