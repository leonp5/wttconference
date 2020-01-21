import React from "react";
import styled from "@emotion/styled";

import { Heading, Text } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";

const Wrapper = styled(ContentWrapper)`
  max-width: 800px;
`;

function Home() {
  return (
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
  );
}

export default Home;
