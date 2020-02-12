import React from "react";

import { Heading, Text } from "../components/Text";
import { TextWrapper } from "../components/Container/ContentWrapper";

export default function Privacy() {
  return (
    <TextWrapper>
      <Heading>Datenschutz</Heading>
      <Text>
        Siehe Datenschutzerklärung des Bund der Freien Waldorfschulen e.V. <br /> <br />
        <a href="https://www.waldorfschule.de/datenschutzerklaerungen/#main-content">
          Hier klicken
        </a>
      </Text>
    </TextWrapper>
  );
}
