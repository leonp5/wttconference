import React from "react";
import styled from "@emotion/styled";

import { Heading, Heading6, PopUpText } from "../components/Text";
import { Form } from "../components/Form/Form";
import { BasicInput } from "../components/Form/InputFields";
import { Button } from "../components/Buttons/Button";
import { RadioButton } from "../components/Buttons/RadioButton";
import { PopUpContent } from "../components/PopUp/PopUpContent";
import { PopUpBackground } from "../components/PopUp/PopUpBackground";
import TogglePopUp from "../components/PopUp/TogglePopUp";
import { PopUpLink } from "../components/Navigation/NavLinks";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { saveAttendee } from "../api/attendees";
// import { notifyAttendee } from "../api/sendMails";
import { TextArea } from "../components/Form/InputFields";
import { Label } from "../components/Form/Labels";
import { RadioLabel } from "../components/Form/Labels";
import { RadioWrapper } from "../components/Container/RadioWrapper";
import { CenterButton } from "../components/Buttons/CenterButton";

const RadioBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default function Registration() {
  const [attendee, setAttendee] = React.useState({
    name: "",
    firstName: "",
    address: "",
    location: "",
    email: "",
    phone: "",
    highschool: "",
    gender: "",
    nutrition: "",
    else: ""
  });
  const [success, setSuccess] = React.useState(null);
  const [show, setShow] = React.useState(null);

  function notifyAttendee(attendee) {
    return fetch(`/api/confirmation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(attendee)
    })
      .then(response => {
        if (response.status === 200) {
          setSuccess(true);
        }
      })
      .then(setShow(true));
  }

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
      firstName: "",
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
      <Heading>Anmeldung</Heading>

      <Form onSubmit={handleSubmit}>
        <Label>Name:*</Label>
        <BasicInput value={attendee.name} name="name" onChange={handleChange} />
        <Label>Vorname:*</Label>
        <BasicInput value={attendee.firstName} name="firstName" onChange={handleChange} />
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
        <Label>Adresse:*</Label>
        <BasicInput value={attendee.address} name="address" onChange={handleChange} />
        <Label>Ort, PLZ:*</Label>
        <BasicInput value={attendee.location} name="location" onChange={handleChange} />
        <Label>Email:*</Label>
        <BasicInput type="email" value={attendee.email} name="email" onChange={handleChange} />
        <Label>Mobil:</Label>
        <BasicInput value={attendee.phone} name="phone" onChange={handleChange} />
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
        <Heading6>* = Pflichtfeld</Heading6>

        <CenterButton>
          <Button
            disabled={
              !attendee.name ||
              !attendee.firstName ||
              !attendee.address ||
              !attendee.location ||
              !attendee.email
            }
          >
            Anmelden
          </Button>
        </CenterButton>
        {show && (
          <>
            <PopUpBackground>
              <PopUpContent>
                {success && (
                  <>
                    <PopUpText>
                      Vielen Dank für deine Anmeldung! <br /> Du erhälst eine Kopie deiner Anmeldung
                      via Mail.
                    </PopUpText>

                    <PopUpLink to="/">Hier gehts zur Startseite</PopUpLink>
                  </>
                )}
                {!success && (
                  <>
                    <PopUpText>Da hat etwas nicht geklappt!</PopUpText>
                  </>
                )}
              </PopUpContent>
            </PopUpBackground>
          </>
        )}
      </Form>
    </ContentWrapper>
  );
}
