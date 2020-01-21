import styled from "@emotion/styled";
import React from "react";

import { mq } from "./MediaQueries";
import { Heading2 } from "../components/Text";

const HomeTopImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: top center;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ImageText = styled(Heading2)`
  font-size: 40px;
  position: absolute;
  top: 2.8rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

export default function HeaderImage() {
  return (
    <RelativeContainer>
      <HomeTopImage src="/images/home_large.jpg" alt="image" />
      <ImageText>
        WALDORF HEUTE <br /> <br /> FÜR MORGEN
        {/* <br />
        <br />
        Tagung für angehende Pädagog*innen <br />
        <br /> 26.-28. Juni 2020 */}
      </ImageText>
    </RelativeContainer>
  );
}

export const ContactImage = styled.img`
  /* ${mq[0]} {
    display: block;
  }
  display: none; */
`;
