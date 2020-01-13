import React from "react";

import { Heading } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { ContactImage } from "../components/Image";

export default function Contact() {
  return (
    <>
      <ContentWrapper>
        <Heading>Kontakt</Heading>
      </ContentWrapper>
      <ContactImage src="/images/orga_team_320.jpg" />
    </>
  );
}
