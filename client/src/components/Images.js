import styled from "@emotion/styled";
import React from "react";

import { Heading2 } from "../components/Text";

const HomeTopImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  z-index: 1;
`;

const ImageText = styled(Heading2)`
  font-size: 40px;
  position: absolute;
  top: 2.8rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default function HeaderImage() {
  return (
    <RelativeContainer>
      <HomeTopImage src="/images/home_1300.jpg" alt="waldorfheute" />

      <ImageText>
        WALDORF HEUTE <br /> <br /> FÜR MORGEN
      </ImageText>
    </RelativeContainer>
  );
}

export const StyledPicture = styled.picture`
  max-width: 800px;
`;

export const FallbackImage = styled.img`
  width: 100%;
`;
