import React from "react";
import styled from "@emotion/styled";

import { Heading } from "../components/Text";
import { Form } from "../components/Form";
import { BasicInput } from "../components/InputFields";
import { Button } from "../components/Buttons/Button";
import { PopUpContent } from "../components/PopUp/PopUpContent";
import { PopUpBackground } from "../components/PopUp/PopUpBackground";
import TogglePopUp from "../components/PopUp/TogglePopUp";
import { NavLink } from "../components/Navigation/NavLink";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { saveAttendee } from "../api/attendees";
import { notifyAttendee } from "../api/sendMails";
import { TextArea } from "../components/InputFields";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Link = styled(NavLink)`
  color: ${props => props.theme.colors.actioncolor};
  &:hover {
    background: ${props => props.theme.colors.actioncolor};
    color: ${props => props.theme.colors.secondary};
  }
`;

const TextField = styled(TextArea)`
  margin-top: 15px;
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

  function onChange(event) {
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
          <BasicInput
            value={attendee.name}
            autoFocus
            name="name"
            onChange={onChange}
            placeholder="Vorname, Name*"
          />
          <BasicInput
            value={attendee.address}
            name="address"
            onChange={onChange}
            placeholder="Adresse*"
          />
          <BasicInput
            value={attendee.location}
            name="location"
            onChange={onChange}
            placeholder="Ort, PLZ*"
          />
          <BasicInput
            type="email"
            value={attendee.email}
            name="email"
            onChange={onChange}
            placeholder="Email*"
          />
          <BasicInput
            type="number"
            value={attendee.phone}
            name="phone"
            onChange={onChange}
            placeholder="Telefon"
          />
          <BasicInput
            value={attendee.highschool}
            name="highschool"
            onChange={onChange}
            placeholder="Hochschule"
          />
          <BasicInput
            value={attendee.gender}
            name="gender"
            onChange={onChange}
            placeholder="Geschlecht (männlich, weiblich, divers)"
          />
          <BasicInput
            value={attendee.nutrition}
            name="nutrition"
            onChange={onChange}
            placeholder="Essen (vegetarisch, vegan, Lebensmittelunverträglichkeiten"
          />
          <TextField
            value={attendee.else}
            name="else"
            onChange={onChange}
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
                  <p>Vielen Dank für deine Anmeldung</p>
                  <Link to="/" onClick={hide}>
                    Hier gehts zur Startseite
                  </Link>
                </PopUpContent>
              </PopUpBackground>
            )}
          />
        </Form>
      </Container>
    </ContentWrapper>
  );
}
