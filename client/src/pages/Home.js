import React from "react";
import styled from "@emotion/styled";

import { Heading, Text } from "../components/Text";
import { ContentWrapper, TextWrapper } from "../components/Container/ContentWrapper";
import { StyledPicture, FallbackImage } from "../components/Images";
import { InlineLink } from "../components/Navigation/NavLinks";

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
            Wie gehen wir mit den Kindern der Gegenwart und Zukunft um? Ist Waldorf noch zeitgemäß?
          </b>
          <br />
          Fragen, die eine kleine Gruppe von Wittener, Stuttgarter und Mannheimer Student*innen
          beschäftigt und Dich als Waldorfstudent*in vielleicht auch?
          <br />
          <br />
          <b>Wir möchten Dich zur Tagung, zu diesen Themen einladen.</b> Die Idee und Ziel dieser
          Tagung ist es, uns gegenseitig kennenzulernen und zu vernetzen. Weiterführend wollen wir
          als Lehrer*innen der Zukunft, wissen, wie wir die Herausforderungen im Unterrichten
          annehmen und wie wir uns gemeinsam daraufhin ausrichten können.
        </Text>
      </TextWrapper>
      <Picture>
        <source srcSet="/images/hands_320.jpg" media="(max-width: 320px)" />
        <source srcSet="/images/hands_640.jpg" media="(max-width: 640px)" />
        <FallbackImage src="/images/hands_800.jpg" alt="waldorf heute" />
      </Picture>
    </ContentWrapper>
  );
}

export default Home;
