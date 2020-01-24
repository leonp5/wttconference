import React from "react";

import { Heading, Text, Headline } from "../components/Text";
import { TextWrapper } from "../components/Container/ContentWrapper";
import { InlineLink } from "../components/Navigation/NavLinks";

export default function Contact() {
  return (
    <TextWrapper>
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
    </TextWrapper>
  );
}
