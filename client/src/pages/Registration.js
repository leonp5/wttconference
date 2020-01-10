import React from "react";
import styled from "@emotion/styled";

import { Heading } from "../components/Text";
import { Form } from "../components/Form";
import { InputField } from "../components/InputField";
import { Button } from "../components/Buttons/Button";
import { PopUpContent } from "../components/PopUp/PopUpContent";
import { PopUpBackground } from "../components/PopUp/PopUpBackground";
import TogglePopUp from "../components/PopUp/TogglePopUp";
import { NavLink } from "../components/Navigation/NavLink";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { saveAttendee, notifyAttendee } from "../api/attendees";

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
          <InputField
            required
            value={attendee.name}
            autoFocus
            name="name"
            onChange={onChange}
            placeholder="Vorname, Name*"
          />
          <InputField
            required
            value={attendee.address}
            name="address"
            onChange={onChange}
            placeholder="Adresse*"
          />
          <InputField
            required
            value={attendee.location}
            name="location"
            onChange={onChange}
            placeholder="Ort, PLZ*"
          />
          <InputField
            required
            type="email"
            value={attendee.email}
            name="email"
            onChange={onChange}
            placeholder="Email*"
          />
          <InputField
            type="number"
            value={attendee.phone}
            name="phone"
            onChange={onChange}
            placeholder="Telefon"
          />
          <InputField
            value={attendee.highschool}
            name="highschool"
            onChange={onChange}
            placeholder="Hochschule"
          />
          <InputField
            value={attendee.gender}
            name="gender"
            onChange={onChange}
            placeholder="Geschlecht (männlich, weiblich, divers)"
          />
          <InputField
            value={attendee.nutrition}
            name="nutrition"
            onChange={onChange}
            placeholder="Essen (vegetarisch, vegan, Lebensmittelunverträglichkeiten"
          />
          <InputField
            value={attendee.else}
            name="else"
            onChange={onChange}
            placeholder="Sonstiges"
          />

          <TogglePopUp
            toggle={show => (
              <Button
                disabled={(!attendee.name, !attendee.address, !attendee.location, !attendee.email)}
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
