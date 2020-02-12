import React from "react";

import { Heading, Text } from "../components/Text";
import { ContentLeft } from "../components/Container/ContentLeft";

export default function Privacy() {
  return (
    <ContentLeft>
      <Heading>Datenschutz</Heading>
      <Text>
        Siehe Datenschutzerklärung des Bund der Freien Waldorfschulen e.V. <br /> <br />
        <a href="https://www.waldorfschule.de/datenschutzerklaerungen/#main-content">
          https://www.waldorfschule.de/datenschutzerklaerungen/#main-content
        </a>
      </Text>
    </ContentLeft>
  );
}
