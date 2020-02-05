import styled from "@emotion/styled";

import { mq } from "../MediaQueries";

export const WorkshopTD = styled.td`
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
