import React from "react";
import styled from "@emotion/styled";

import { Heading, Text, Heading3 } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { ContactImage } from "../components/Images";
import { Form } from "../components/Form";
import { BasicInput } from "../components/InputFields";
import { Label } from "../components/Labels";
import { TextArea } from "../components/InputFields";
import { Button } from "../components/Buttons/Button";
import { sendRequest } from "../api/sendMails";
import TogglePopUp from "../components/PopUp/TogglePopUp";
import { PopUpBackground } from "../components/PopUp/PopUpBackground";
import { PopUpContent } from "../components/PopUp/PopUpContent";
import { PopUpLink } from "../components/Navigation/NavLinks";

const PageText = styled(Text)`
  text-align: center;
`;

const ContactForm = styled(Form)`
  align-items: start;
`;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function Contact() {
  const [request, setRequest] = React.useState({
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
    sendRequest(request);
    setRequest({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <ContentWrapper>
      <Heading>Kontakt</Heading>
      <ContactImage src="/images/orga_team_320.jpg" />
      <PageText>Komme bei sämtlichen Fragen gerne auf uns zu!</PageText>
      <Heading3>Ansprechpartnerinnen:</Heading3>
      <PageText>Katharina Wiesand und Carolin Kreinfeldt</PageText>
      <PageText>
        E-Mail: <a href="mailto:info@beispiel.de">info@beispiel.de</a>{" "}
      </PageText>
      <PageText>Oder schreib uns direkt über das Kontaktformular:</PageText>

      <ContactForm onSubmit={handleSubmit}>
        <Label>Name*:</Label>
        <BasicInput autoFocus value={request.name} name="name" onChange={handleChange} />
        <Label>Email*:</Label>
        <BasicInput value={request.email} name="email" onChange={handleChange} />
        <Label>Betreff:</Label>
        <BasicInput value={request.subject} name="subject" onChange={handleChange} />
        <Label>Deine Nachricht*:</Label>
        <TextArea value={request.message} name="message" onChange={handleChange} />
        <TogglePopUp
          toggle={show => (
            <CenterButton>
              <Button disabled={!request.name || !request.email || !request.message} onClick={show}>
                Abschicken
              </Button>
            </CenterButton>
          )}
          content={hide => (
            <PopUpBackground>
              <PopUpContent>
                <p>Vielen Dank für deine Nachricht!</p>
                <PopUpLink to="/" onClick={hide}>
                  Hier gehts zur Startseite
                </PopUpLink>
              </PopUpContent>
            </PopUpBackground>
          )}
        />
      </ContactForm>
    </ContentWrapper>
  );
}
