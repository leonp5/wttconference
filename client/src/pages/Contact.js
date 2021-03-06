import React from "react";

import { Heading, PageText, Heading2, Heading6, PopUpText } from "../components/Text";
import { ContentWrapper, ContentContainer } from "../components/Container/ContentWrapper";
import { StyledPicture, FallbackImage } from "../components/Images";
import { Form } from "../components/Form/Form";
import { BasicInput } from "../components/Form/InputFields";
import { Label } from "../components/Form/Labels";
import { TextArea } from "../components/Form/InputFields";
import { Button } from "../components/Buttons/Button";
import { PopUpLink, SimpleAnchor } from "../components/Navigation/NavLinks";
import PopUp from "../components/PopUp/PopUp";
import { FlexibleContainer } from "../components/Container/FlexibleContainer";
import ContactMap from "../components/ContactMap";
import { CenterButton } from "../components/Buttons/CenterButton";
import useSessionStorage from "../hooks/useSessionStorage";
import CheckBoxContainer from "../components/Container/CheckBoxContainer";
import { sendMail } from "../api/sendMail";

export default function Contact() {
  const [isChecked, setIsChecked] = React.useState();
  const [success, setSuccess] = React.useState(true);
  const [show, setShow] = React.useState(false);

  const [request, setRequest] = useSessionStorage("request", {
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    setRequest({
      ...request,
      [event.target.name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMail(`/api/request`, request, setShow, setSuccess);
    setRequest({ name: "", email: "", subject: "", message: "" });
    sessionStorage.removeItem("request");
  }

  return (
    <>
      <ContentWrapper>
        <Heading>Kontakt</Heading>
        <StyledPicture>
          <source srcSet="/images/orga_team_320.jpg" media="(max-width: 340px)" />
          <source srcSet="/images/orga_team_640.jpg" media="(max-width: 640px)" />
          <FallbackImage src="/images/orga_team_800.jpg" alt="team" />
        </StyledPicture>
        <ContentContainer>
          <FlexibleContainer>
            <Heading2>Ansprechpartnerinnen:</Heading2>
            <PageText>
              Katharina Wiesand und Carolin Kreinfeldt <br /> E-Mail:{" "}
              <a href="mailto:info@waldorf-heute-fuer-morgen.de">
                info@waldorf-heute-fuer-morgen.de
              </a>
            </PageText>
            <PageText>
              Komm bei sämtlichen Fragen gerne auf uns zu oder schreib uns direkt über das
              Kontaktformular:
            </PageText>

            <Form onSubmit={handleSubmit}>
              <Label>Name:*</Label>
              <BasicInput value={request.name} name="name" onChange={handleChange} />
              <Label>Email:*</Label>
              <BasicInput value={request.email} name="email" onChange={handleChange} />
              <Label>Betreff:</Label>
              <BasicInput value={request.subject} name="subject" onChange={handleChange} />
              <Label>Deine Nachricht:*</Label>
              <TextArea value={request.message} name="message" onChange={handleChange} />
              <Heading6>* = Pflichtfeld</Heading6>

              {CheckBoxContainer(isChecked, () => setIsChecked(!isChecked))}

              <CenterButton>
                <Button
                  disabled={
                    !request.name || !request.email || !request.message || isChecked !== true
                  }
                >
                  Abschicken
                </Button>
              </CenterButton>
              {show && (
                <>
                  <PopUp>
                    {success && (
                      <>
                        <PopUpText>Vielen Dank für deine Nachricht!</PopUpText>
                        <PopUpLink to="/">Hier gehts zur Startseite</PopUpLink>{" "}
                      </>
                    )}
                    {!success && (
                      <>
                        <PopUpText>
                          Das hat leider nicht geklappt! <br /> Du kannst es noch Mal{" "}
                          <SimpleAnchor onClick={() => setShow(false)}>probieren</SimpleAnchor> oder
                          uns per Mail kontaktieren.
                        </PopUpText>
                      </>
                    )}
                  </PopUp>
                </>
              )}
            </Form>
          </FlexibleContainer>
          <FlexibleContainer>
            <Heading2>Tagungsort:</Heading2>
            <PageText>
              Alanus Hochschule – Institut für Waldorfpädagogik, Inklusion und Interkulturalität{" "}
              <br />
              Zielstraße 28,
              <br /> D-68167 Mannheim
            </PageText>
            <ContactMap />
          </FlexibleContainer>
        </ContentContainer>
      </ContentWrapper>
    </>
  );
}
