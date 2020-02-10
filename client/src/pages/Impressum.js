import React from "react";

import { Heading, Heading2, Text } from "../components/Text";
import { ContentLeft } from "../components/Container/ContentLeft";

export default function Impressum() {
  return (
    <ContentLeft>
      <Heading>Impressum</Heading>
      <Heading2>Angaben gemäß § 5 TMG</Heading2>
      <Text>
        Bund der Freien Waldorfschulen e.V. <br /> Wagenburgstr. 6 <br />
        70184 Stuttgart
      </Text>
      <Text>
        <b>Vertreten durch:</b> <br />
        <br /> Vorstände des BdFWS: <br />
        <br />
        Nele Auschra, Stefan Grosse, Hans-Georg Hutzel, Henning Kullak-Ublick, Thomas
        Lutze-Rodenbusch, Eva Wörner <br /> <br />
        Geschäftsführer:
        <br />
        Christian Boettger, Christoph Dörsch, Klaus-Peter Freitag, Hans-Georg Hutzel
      </Text>
      <Heading2>Kontakt</Heading2>
      <Text>
        Telefon: +49 (0)711 21042-0
        <br />
        E-Mail: <a href="mailto:bund@waldorfschule.de">bund@waldorfschule.de</a>
      </Text>
      <Heading2>EU-Streitschlichtung</Heading2>
      <Text>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href=" https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>. Unsere
        E-Mail-Adresse finden Sie oben im Impressum.
      </Text>
      <Heading2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</Heading2>
      <Text>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </Text>
    </ContentLeft>
  );
}
