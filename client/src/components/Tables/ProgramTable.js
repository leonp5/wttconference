import styled from "@emotion/styled";

export const Table = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  margin: 40px;
  max-width: 200px;
  line-height: 1.7;
`;

export const TableHeading = styled.h3`
  text-align: center;
`;

export const Time = styled.p`
  font-style: italic;
  text-align: center;
`;

export const Content = styled.p`
  text-align: center;
`;
