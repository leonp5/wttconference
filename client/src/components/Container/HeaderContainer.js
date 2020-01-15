import styled from "@emotion/styled";

import { mq } from "../MediaQueries";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;

  ${mq[0]} {
    display: none;
  }
`;
