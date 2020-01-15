import React from "react";
import styled from "@emotion/styled";

import { Heading, Text, Heading3 } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { InlineLink } from "../components/Navigation/NavLinks";

const Wrapper = styled(ContentWrapper)`
  max-width: 800px;
`;

const Headline = styled(Heading3)`
  text-align: left;
  width: 100%;
  padding-left: 15px;
  margin-bottom: 0px;
`;

export default function Contact() {
  return (
    <Wrapper>
      <Heading>Tagungsbeitrag</Heading>
      <Text>
        Der Tagungsbetrag beträgt 20 Euro für Verpflegung und Unterkunft. Dieser Preis wird durch
        Spenden verschiedener Sponsoren ermöglicht, was bedeutet, dass die realen Kosten pro
        Teilnehmer*in höher sind. Grundsätzlich soll die Teilnahme aber keinem*r Teilnehmer*in durch
        den finanziellen Beitrag verwehrt bleiben. Kontaktiert daher bei finanziellen Fragen bitte
        vertrauensvoll das <InlineLink to="/contact">Tagungsbüro</InlineLink>, damit wir uns auf
        eine Ermäßigung einigen können.
      </Text>
      <Headline>Konto:</Headline>
      <Text>
        Trägergesellschaft für geisteswissenschaftliche Bildung gemeinnützige GmbH <br />
        Sparkasse Rhein Neckar Nord <br />
        IBAN DE25 6705 0505 0030 1924 51 <br /> <b>Verwendungszweck:</b> „Studierendentagung“
      </Text>
      <Headline>Tagungsort:</Headline>
      <Text>
        Alanus Hochschule – Institut für Waldorfpädagogik, Inklusion und Interkulturalität <br />
        Am Exerzierplatz 21
        <br /> D-68167 Mannheim
      </Text>
    </Wrapper>
  );
}
