import styled from "@emotion/styled";

import { mq } from "../MediaQueries";

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-around;

  ${mq[0]} {
    display: none;
  }
`;
