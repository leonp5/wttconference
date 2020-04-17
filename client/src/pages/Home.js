import React from "react";
import styled from "@emotion/styled";

import { Heading, Text } from "../components/Text";
import { ContentWrapper, TextWrapper } from "../components/Container/ContentWrapper";
import { StyledPicture, FallbackImage } from "../components/Images";
import { InlineLink } from "../components/Navigation/NavLinks";

const Picture = styled(StyledPicture)`
  width: 100%;
  max-width: none;
  bottom: 0px;
  position: fixed;
`;

const Wrapper = styled(ContentWrapper)`
  margin-bottom: 45%;
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  z-index: 1;
`;

function Home() {
  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Heading>Tagung für angehende Pädagog*innen</Heading>
          {/* <Heading>26.-28. Juni 2020</Heading> */}
          <Heading>Wichtig!</Heading>
          <Text>
            Liebe Studierende, anlässlich des Beschlusses des Bunds und der Länder vom 15.04.20,
            welcher Veranstaltungen bis zum 31. August diesen Jahres untersagt, müssen auch wir
            unsere Tagung für dieses Jahr leider absagen. Doch wie sagt man so schön: Aufgehoben ist
            nur aufgeschoben. Oder wie war das noch gleich..? Unsere Tagung wird deswegen um ein
            Jahr verschoben und 2021 stattfinden. Ein genaues Datum werdet ihr hier, oder in eurer
            Hochschule erfahren sobald wir wieder planen können. Bleibt gesund! Euer Tagungsteam
          </Text>
          <Text>
            Liebe/r Waldorfpädagogik Studenten*in, liebe/r Seminarist*in, <br />
            <br />
            Hier findest du alle Informationen zur Tagung „Waldorf heute für morgen“ und hier kannst
            du dich auch direkt <InlineLink to="/registration">anmelden</InlineLink>.
            <br />
            <br />
            <b>
              Waldorf 100 haben wir gefeiert, doch wie geht es weiter? Was ist Waldorf heute? Und
              Morgen? Was möchten wir aus der Vergangenheit der Waldorfbewegung mitnehmen und wo
              bedarf es neue Ideen und Impulse?
              <br />
              Wie gehen wir mit den Kindern der Gegenwart und Zukunft um? Ist Waldorf noch
              zeitgemäß?
            </b>
            <br />
            Fragen, die eine kleine Gruppe von Wittener, Stuttgarter und Mannheimer Student*innen
            beschäftigt und dich als Waldorfstudent*in vielleicht auch?
            <br />
            <br />
            <b>Wir möchten dich zur Tagung, zu diesen Themen einladen.</b> Die Idee und Ziel dieser
            Tagung ist es, uns gegenseitig kennenzulernen und zu vernetzen. Weiterführend wollen wir
            als Lehrer*innen der Zukunft, wissen, wie wir die Herausforderungen im Unterrichten
            annehmen und wie wir uns gemeinsam daraufhin ausrichten können.
          </Text>
        </TextWrapper>
      </Wrapper>
      <Picture>
        <source srcSet="/images/hands_320.jpg" media="(max-width: 320px)" />
        <source srcSet="/images/hands_640.jpg" media="(max-width: 640px)" />
        <source srcSet="/images/hands_800.jpg" media="(max-width: 800px)" />
        <source srcSet="/images/hands_1400.jpg" media="(max-width: 1400px)" />
        <FallbackImage src="/images/hands_800.jpg" alt="waldorf heute" />
      </Picture>
    </>
  );
}

export default Home;
