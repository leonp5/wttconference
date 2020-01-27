import React from "react";

import { Heading, Text } from "../components/Text";
import { TextWrapper } from "../components/Container/ContentWrapper";

function Workshops() {
  return (
    <TextWrapper>
      <Heading>Workshops</Heading>
      <Text>
        Für ein vielfältiges Programm auf unserer Tagung brauchen wir Deine Mithilfe! Es wird eine
        Workshopzeit geben, welche Dir die Möglichkeit gibt, an der Tagung aktiv mitzugestalten. Sie
        kann für unterschiedlichste Aktionen genutzt werden, wie z.B. für eine Gesprächsgruppe,
        Sport, Musik, Tanz, egal was Dir Freude bereitet oder was du gerne mit anderen
        Teilnehmer*innen teilen möchtest. Wenn Du eine Idee hast, wie Du mit einer kleinen Gruppe
        anderer Studierender gemeinsam aktiv werden kannst, wie ihr in einen Austausch über Themen
        kommen könnt, die euch am Herzen liegen oder wie ihr einfach nur gemeinsam Spaß haben könnt,
        dann melde dich gerne bei uns!
      </Text>
      <Text>
        <b>Ansprechpartnerinnen</b>: Sofia Abedi und Imra Henseleit
      </Text>
    </TextWrapper>
  );
}

export default Workshops;
