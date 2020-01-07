import styled from "@emotion/styled";

// const breakpoints = [420];

// const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableHeaderRow = styled.tr``;

export const TableRow = styled.tr`
  :nth-of-type(odd) {
    background: ${props => props.theme.colors.backgroundLight};
  }
  &:hover {
    background: ${props => props.theme.colors.transparentBackgroundLight};
  }
`;

export const TableData = styled.td`
  color: ${props => props.theme.colors.font};
  padding: 5px;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
