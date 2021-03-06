import React from "react";

import { Heading, Heading3, Heading6, Text, PopUpText, PageText } from "../components/Text";
import { TextWrapper, ContentWrapper } from "../components/Container/ContentWrapper";
import { Form } from "../components/Form/Form";
import { Label } from "../components/Form/Labels";
import { BasicInput, TextArea } from "../components/Form/InputFields";
import { Button } from "../components/Buttons/Button";
import { CenterButton } from "../components/Buttons/CenterButton";
import { PopUpLink, SimpleAnchor } from "../components/Navigation/NavLinks";
import PopUp from "../components/PopUp/PopUp";
import saveData from "../api/saveData";
import useSessionStorage from "../hooks/useSessionStorage";
import CheckBoxContainer from "../components/Container/CheckBoxContainer";
import { sendMail } from "../api/sendMail";

export default function Workshops() {
  const [isChecked, setIsChecked] = React.useState();
  const [success, setSuccess] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [workshop, setWorkshop] = useSessionStorage("workshop", {
    name: "",
    firstName: "",
    email: "",
    workshopName: "",
    workshopDescription: "",
    message: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    setWorkshop({
      ...workshop,
      [event.target.name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveData("/api/workshops", workshop);
    sendMail("/api/workshop", workshop, setShow, setSuccess);
    setWorkshop({
      name: "",
      firstName: "",
      email: "",
      workshopName: "",
      workshopDescription: "",
      message: ""
    });
    sessionStorage.removeItem("workshop");
  }

  return (
    <ContentWrapper>
      <TextWrapper>
        <Heading>Workshops</Heading>
        <Text>
          Für ein vielfältiges Programm auf unserer Tagung brauchen wir Deine Mithilfe! Es wird eine
          Workshopzeit geben, welche Dir die Möglichkeit gibt, an der Tagung aktiv mitzugestalten.
          Sie kann für unterschiedlichste Aktionen genutzt werden, wie z.B. für eine
          Gesprächsgruppe, Sport, Musik, Tanz, egal was Dir Freude bereitet oder was du gerne mit
          anderen Teilnehmer*innen teilen möchtest. Wenn Du eine Idee hast, wie Du mit einer kleinen
          Gruppe anderer Studierender gemeinsam aktiv werden kannst, wie ihr in einen Austausch über
          Themen kommen könnt, die euch am Herzen liegen oder wie ihr einfach nur gemeinsam Spaß
          haben könnt, dann melde dich bis zum 15. März 2020 gerne bei uns!
        </Text>
        <PageText>
          Bedenke bitte deine benötigten Materialien zu besorgen, oder informiere uns, was du
          benötigst.
        </PageText>
        <Text>
          <b>Ansprechpartnerinnen</b>: Sofia Abedi und Imra Henseleit <br /> Email:{" "}
          <a href="mailto:workshops@waldorf-heute-fuer-morgen.de">
            workshops@waldorf-heute-fuer-morgen.de
          </a>
        </Text>
      </TextWrapper>
      <Heading3>Workshopanmeldung</Heading3>

      <Form onSubmit={handleSubmit}>
        <Label>Name:*</Label>
        <BasicInput value={workshop.name} name="name" onChange={handleChange} />
        <Label>Vorname:*</Label>
        <BasicInput value={workshop.firstName} name="firstName" onChange={handleChange} />
        <Label>Email:*</Label>
        <BasicInput value={workshop.email} name="email" onChange={handleChange} />
        <Label>Workshop:*</Label>
        <BasicInput value={workshop.workshopName} name="workshopName" onChange={handleChange} />
        <Label>Workshop Beschreibung:*</Label>
        <TextArea
          value={workshop.workshopDescription}
          name="workshopDescription"
          onChange={handleChange}
        />
        <Label>Deine Nachricht an uns:</Label>
        <TextArea value={workshop.message} name="message" onChange={handleChange} />
        <Heading6>* = Pflichtfeld</Heading6>

        {CheckBoxContainer(isChecked, () => setIsChecked(!isChecked))}

        <CenterButton>
          <Button
            disabled={
              isChecked !== true ||
              !workshop.workshopDescription ||
              !workshop.name ||
              !workshop.firstName ||
              !workshop.email ||
              !workshop.workshopName
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
                  <PopUpText>
                    Vielen Dank für dein Workshop-Angebot! <br /> Du erhälst eine Kopie via Mail.
                  </PopUpText>
                  <PopUpLink to="/">Hier gehts zur Startseite</PopUpLink>
                </>
              )}
              {!success && (
                <>
                  <PopUpText>
                    Das hat leider nicht geklappt! <br /> Du kannst es noch Mal{" "}
                    <SimpleAnchor onClick={() => setShow(false)}>probieren</SimpleAnchor> oder uns
                    per Mail kontaktieren.
                  </PopUpText>
                </>
              )}
            </PopUp>
          </>
        )}
      </Form>
    </ContentWrapper>
  );
}
