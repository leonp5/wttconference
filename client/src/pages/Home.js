import React from "react";
import styled from "@emotion/styled";

import { Heading, Text } from "../components/Text";
import { ContentWrapper, TextWrapper } from "../components/Container/ContentWrapper";
import { StyledPicture, FallbackImage } from "../components/Images";

const Picture = styled(StyledPicture)`
  width: 80%;
`;

function Home() {
  return (
    <ContentWrapper>
      <TextWrapper>
        <Heading>Tagung für angehende Pädagog*innen</Heading>
        <Heading>26.-28. Juni 2020</Heading>
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
      </TextWrapper>
      <Picture>
        <source srcSet="/images/hands_320.jpg" media="(max-width: 320px)" />
        <source srcSet="/images/hands_640.jpg" media="(max-width: 640px)" />
        <FallbackImage src="/images/hands_800.jpg" alt="come together" />
      </Picture>
    </ContentWrapper>
  );
}

export default Home;
