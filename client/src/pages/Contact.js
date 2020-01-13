import React from "react";
import styled from "@emotion/styled";

import { Heading, Text } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { ContactImage } from "../components/Images";
import { Form } from "../components/Form";
import { InputField } from "../components/InputField";
import { Label } from "../components/Label";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Buttons/Button";
import { sendRequest } from "../api/sendMails";

const PageText = styled(Text)`
  text-align: center;
  line-height: 2rem;
`;

const Input = styled(InputField)`
  margin-top: 10px;
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

  function onChange(event) {
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
      <PageText>
        Komme bei sämtlichen Fragen gerne auf uns zu! <br />
        <br />
        <b>Ansprechpartnerinnen:</b> <br /> Katharina Wiesand und Carolin Kreinfeldt
        <br /> <b>E-Mail: </b> <a href="mailto:info@beispiel.de">info@beispiel.de</a> <br />
        Oder schreib uns direkt über das Kontaktformular:
      </PageText>
      <ContactForm>
        <Label>Name:</Label>
        <Input autoFocus value={request.name} name="name" onChange={onChange} />
        <Label>Emailadresse:</Label>
        <Input value={request.email} name="email" onChange={onChange} />
        <Label>Betreff:</Label>
        <Input value={request.subject} name="subject" onChange={onChange} />
        <Label>Deine Nachricht:</Label>
        <TextArea value={request.message} name="message" onChange={onChange}></TextArea>
      </ContactForm>
      <Button
        onClick={handleSubmit}
        disabled={(!request.name, !request.email, !request.subject, !request.message)}
      >
        Abschicken
      </Button>
    </ContentWrapper>
  );
}
