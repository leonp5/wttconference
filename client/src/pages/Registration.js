import React from "react";
import styled from "@emotion/styled";

import { Heading } from "../components/Text";
import { Form } from "../components/Form";
import { BasicInput } from "../components/InputFields";
import { Button } from "../components/Buttons/Button";
import { RadioButton } from "../components/Buttons/RadioButton";
import { PopUpContent } from "../components/PopUp/PopUpContent";
import { PopUpBackground } from "../components/PopUp/PopUpBackground";
import TogglePopUp from "../components/PopUp/TogglePopUp";
import { PopUpLink } from "../components/Navigation/NavLinks";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { saveAttendee } from "../api/attendees";
import { notifyAttendee } from "../api/sendMails";
import { TextArea } from "../components/InputFields";
import { Label } from "../components/Labels";
import { RadioLabel } from "../components/Labels";
import { RadioWrapper } from "../components/Container/RadioWrapper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const RadioBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default function Registration() {
  const [attendee, setAttendee] = React.useState({
    name: "",
    address: "",
    location: "",
    email: "",
    phone: "",
    highschool: "",
    gender: "",
    nutrition: "",
    else: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    setAttendee({
      ...attendee,
      [event.target.name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveAttendee(attendee);
    notifyAttendee(attendee);
    setAttendee({
      name: "",
      address: "",
      location: "",
      email: "",
      phone: "",
      highschool: "",
      gender: "",
      nutrition: "",
      else: ""
    });
  }

  return (
    <ContentWrapper>
      <Container>
        <Heading>Anmeldung</Heading>
        <Form onSubmit={handleSubmit}>
          <Label>Name, Vorname*:</Label>

          <BasicInput value={attendee.name} autoFocus name="name" onChange={handleChange} />

          <Label>Geschlecht:</Label>
          <RadioBox>
            <RadioWrapper>
              <RadioButton
                onChange={handleChange}
                type="radio"
                name="gender"
                value="männlich"
                checked={attendee.gender === "männlich"}
              />
              <RadioLabel>männlich</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton
                onChange={handleChange}
                type="radio"
                name="gender"
                value="weiblich"
                checked={attendee.gender === "weiblich"}
              />
              <RadioLabel>weiblich</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton
                onChange={handleChange}
                type="radio"
                name="gender"
                value="divers"
                checked={attendee.gender === "divers"}
              />

              <RadioLabel>divers</RadioLabel>
            </RadioWrapper>
          </RadioBox>
          <Label>Adresse*:</Label>
          <BasicInput value={attendee.address} name="address" onChange={handleChange} />
          <Label>Ort, PLZ*:</Label>
          <BasicInput value={attendee.location} name="location" onChange={handleChange} />
          <Label>Email*:</Label>
          <BasicInput type="email" value={attendee.email} name="email" onChange={handleChange} />
          <Label>Mobil:</Label>
          <BasicInput type="number" value={attendee.phone} name="phone" onChange={handleChange} />
          <Label>Hochschule:</Label>
          <BasicInput value={attendee.highschool} name="highschool" onChange={handleChange} />

          <Label>Essen:</Label>
          <BasicInput
            value={attendee.nutrition}
            name="nutrition"
            onChange={handleChange}
            placeholder="Essen (vegetarisch, vegan, Lebensmittelunverträglichkeiten"
          />
          <Label>Sonstiges:</Label>
          <TextArea
            value={attendee.else}
            name="else"
            onChange={handleChange}
            placeholder="Deine Nachricht, Anmerkung, etc."
          />

          <TogglePopUp
            toggle={show => (
              <Button
                disabled={
                  !attendee.name || !attendee.address || !attendee.location || !attendee.email
                }
                onClick={show}
              >
                Anmelden
              </Button>
            )}
            content={hide => (
              <PopUpBackground>
                <PopUpContent>
                  <p>Vielen Dank für deine Anmeldung!</p>
                  <PopUpLink to="/" onClick={hide}>
                    Hier gehts zur Startseite
                  </PopUpLink>
                </PopUpContent>
              </PopUpBackground>
            )}
          />
        </Form>
      </Container>
    </ContentWrapper>
  );
}
