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
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileFooterColumn = styled(FooterColumn)`
  display: none;
  ${mq[0]} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
