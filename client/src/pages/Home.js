import React from "react";
import styled from "@emotion/styled";

import { Heading, Heading2, Text } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { HomeTopImage } from "../components/Images";

const Wrapper = styled(ContentWrapper)`
  max-width: 800px;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ImageText = styled(Heading2)`
  position: absolute;
  top: 3rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

function Home() {
  return (
    <>
      <RelativeContainer>
        <HomeTopImage src="/images/home_large.jpg" alt="image" />
        <ImageText>
          Waldorf Heute für Morgen
          <br />
          <br />
          Tagung für angehende Pädagog*innen <br />
          <br /> 26.-28. Juni 2020
        </ImageText>
      </RelativeContainer>
      <ContentWrapper>
        <Wrapper>
          <Heading>Willkommen!</Heading>
          <Text>
            Willkommen auf der Tagungsseite! <br />
            Hier findest du alle Informationen zur Tagung, zum Programm und hier kannst du dich
            anmelden.
            <br />
            Diese Tagung wird von Studierenden für Studierende aller Lehrerseminare/Hochschulen der
            Anthroposophie und Waldorfpädagogik in Deutschland organisiert. <br />
            Idee und Ziel dieser Tagung ist es, uns gegenseitig kennenzulernen und zu vernetzen.
            Weiterführend, als Lehrer*innen der Zukunft, zu wissen, wie wir die Herausforderungen im
            Unterrichten der kommenden Generationen annehmen und wie wir uns gemeinsam daraufhin
            ausrichten können.
          </Text>
        </Wrapper>
      </ContentWrapper>
    </>
  );
}

export default Home;
