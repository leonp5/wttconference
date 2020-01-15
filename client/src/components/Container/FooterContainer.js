import styled from "@emotion/styled";

import { mq } from "../MediaQueries";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  ${mq[0]} {
    display: none;
  }
`;
