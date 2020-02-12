import React from "react";

import { Heading, Text } from "../components/Text";
import { TextWrapper } from "../components/Container/ContentWrapper";

export default function Impressum() {
  return (
    <TextWrapper>
      <Heading>Impressum</Heading>
      <Text>
        Siehe Impressum des Bund der Freien Waldorfschulen e.V. <br /> <br />
        <a href="https://www.waldorfschule.de/impressum/#main-content">Hier klicken</a>
      </Text>
      <Text>
        Technische Umsetzung der Website: <br />
        Leon Pelzer <br />
        E-Mail: <a href="mailto:leonpe@web.de">leonpe@web.de</a> <br />
        GitHub: <a href="https://github.com/leonp5">https://github.com/leonp5</a>
      </Text>
    </TextWrapper>
  );
}
