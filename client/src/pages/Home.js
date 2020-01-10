import React from "react";
import styled from "@emotion/styled";

import { Heading, Heading2 } from "../components/Heading";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { Image } from "../components/Image";

const ImageContainer = styled.div``;

const RelativeContainer = styled.div`
  position: relative;
`;

const ImageText = styled(Heading2)`
  position: absolute;
  top: 3rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const Text = styled.p`
  padding: 10px;
  font-size: 1.1rem;
`;

function Home() {
  return (
    <ContentWrapper>
      <RelativeContainer>
        <ImageContainer>
          <Image src="/images/home_large.jpg" alt="image" />
        </ImageContainer>
        <ImageText>
          Tagung für angehende Pädagog*innen <br />
          <br /> 26.-28. Juni 2020 <br /> <br />
          Im Institut für Waldorfpädagogik in Mannheim
        </ImageText>
      </RelativeContainer>
      <Heading>Willkommen!</Heading>
      <Text>
        Willkommen auf der Tagungsseite! <br />
        Hier findest du alle Informationen zur Tagung, zum Programm und hier kannst dich anmelden.
        Diese Tagung wird von Studierenden für Studierende aller Lehrerseminare/Hochschulen der
        Anthroposophie und Waldorfpädagogik in Deutschland organisiert. <br />
        Idee und Ziel dieser Tagung ist es uns gegenseitig kennenzulernen und zu vernetzen.
        Weiterführend, als Lehrer*innen der Zukunft, zu wissen, wie wir die Herausforderungen im
        Unterrichten der kommenden Generationen nehmen und wie wir uns gemeinsam daraufhin
        ausrichten können?
      </Text>
    </ContentWrapper>
  );
}

export default Home;
