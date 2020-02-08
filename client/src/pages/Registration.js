import React from "react";
import styled from "@emotion/styled";

import { Heading, Heading6, PopUpText, CheckBoxText } from "../components/Text";
import { Form } from "../components/Form/Form";
import { BasicInput, CheckBox } from "../components/Form/InputFields";
import { Button } from "../components/Buttons/Button";
import { RadioButton } from "../components/Buttons/RadioButton";
import { PopUpLink, SimpleLink, SmallInlineLink } from "../components/Navigation/NavLinks";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { TextArea } from "../components/Form/InputFields";
import { Label } from "../components/Form/Labels";
import { RadioLabel } from "../components/Form/Labels";
import { RadioWrapper } from "../components/Container/RadioWrapper";
import { CenterButton } from "../components/Buttons/CenterButton";
import PopUp from "../components/PopUp/PopUp";
import saveData from "../api/saveData";
import useSessionStorage from "../hooks/useSessionStorage";
import { CheckBoxContainer } from "../components/Container/CheckBoxContainer";

const RadioBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
`;

export default function Registration() {
  const [isChecked, setIsChecked] = React.useState();
  const [success, setSuccess] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [attendee, setAttendee] = useSessionStorage("attendee", {
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

  function notifyAttendee(attendee) {
    return fetch(`/api/confirmation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(attendee)
    })
      .then(response => {
        if (response.status === 500) {
          setSuccess(false);
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
    saveData("/api/attendees", attendee);
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
    sessionStorage.removeItem("attendee");
  }

  function handleCheck() {
    setIsChecked(!isChecked);
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
        <CheckBoxContainer>
          <CheckBox type="checkbox" defaultChecked={isChecked} onChange={handleCheck} />{" "}
          <CheckBoxText>
            Ich habe die <SmallInlineLink to="/privacy">Datenschutzbestimmungen</SmallInlineLink>{" "}
            zur Kenntnis genommen.
          </CheckBoxText>
        </CheckBoxContainer>
        <CenterButton>
          <Button
            disabled={
              isChecked !== true ||
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
            <PopUp>
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
                  <PopUpText>
                    Das hat leider nicht geklappt! <br /> Du kannst es noch Mal{" "}
                    <SimpleLink onClick={() => setShow(false)}>probieren</SimpleLink> oder uns per
                    Mail kontaktieren.
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
