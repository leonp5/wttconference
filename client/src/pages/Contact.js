import React from "react";
import styled from "@emotion/styled";

import { Heading, Text, Heading3 } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { ContactImage } from "../components/Images";
import { Form } from "../components/Form";
import { BasicInput } from "../components/InputFields";
import { Label } from "../components/Label";
import { TextArea } from "../components/InputFields";
import { Button } from "../components/Buttons/Button";
import { sendRequest } from "../api/sendMails";

const PageText = styled(Text)`
  text-align: center;
  line-height: 2rem;
`;

const Input = styled(BasicInput)`
  margin-top: 0;
  margin-bottom: 10px;
`;

const ContactForm = styled(Form)`
  align-items: start;
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
        <Label>Name:</Label>
        <Input autoFocus value={request.name} name="name" onChange={handleChange} />
        <Label>Emailadresse:</Label>
        <Input value={request.email} name="email" onChange={handleChange} />
        <Label>Betreff:</Label>
        <Input value={request.subject} name="subject" onChange={handleChange} />
        <Label>Deine Nachricht:</Label>
        <TextArea value={request.message} name="message" onChange={handleChange}></TextArea>
      </ContactForm>
      <Button
        onClick={handleSubmit}
        disabled={!request.name || !request.email || !request.subject || !request.message}
      >
        Abschicken
      </Button>
    </ContentWrapper>
  );
}
