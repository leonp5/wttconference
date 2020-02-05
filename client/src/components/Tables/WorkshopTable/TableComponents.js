import styled from "@emotion/styled";

import { mq } from "../../MediaQueries";

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  position: sticky;
  top: 65px;
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.secondary};
  letter-spacing: 1px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  ${mq[1]} {
    display: block;
  }
`;

export const TableHeaderRow = styled.tr`
  ${mq[1]} {
    position: absolute;
    z-index: -1000;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  :nth-of-type(odd) {
    background: ${props => props.theme.colors.transparentBackgroundLight};
  }
  :nth-of-type(even) {
    background: ${props => props.theme.colors.secondary};
  }
  &:hover {
    background: ${props => props.theme.colors.hover};
  }

  ${mq[1]} {
    display: block;
  }
`;

export const TableData = styled.td`
  color: ${props => props.theme.colors.font};
  padding: 5px;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;

  ${mq[1]} {
    height: 28px;
    display: block;
    position: relative;
    padding-left: 50%;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};

    :before {
      position: absolute;
      top: 6px;
      left: 6px;
    }
    :nth-of-type(1):before {
      content: "Name";
    }
    :nth-of-type(2):before {
      content: "Vorname";
    }
    :nth-of-type(3):before {
      content: "Email";
    }
    :nth-of-type(4):before {
      content: "Workshop";
    }
    :nth-of-type(5):before {
      content: "Workshop Beschreibung";
    }
    :nth-of-type(6):before {
      content: "Nachricht";
    }
  }
`;

export const TableDataLarge = styled(TableData)``;
