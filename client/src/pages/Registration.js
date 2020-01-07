import React from "react";
import styled from "@emotion/styled";

import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Buttons/Button";
import Heading from "../components/Heading";
import PopUpContent from "../components/PopUp/PopUpContent";
import PopUpBackground from "../components/PopUp/PopUpBackground";
import NavLink from "../components/NavLink";
import ContentWrapper from "../components/ContentWrapper";
import TogglePopUp from "../components/PopUp/TogglePopUp";
import { saveAttendee } from "../api/attendees";

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
    workshop1: "",
    workshop2: "",
    workshop3: "",
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
    setAttendee({
      name: "",
      address: "",
      location: "",
      email: "",
      phone: "",
      workshop1: "",
      workshop2: "",
      workshop3: "",
      else: ""
    });
  }

  return (
    <ContentWrapper>
      <Container>
        <Heading>Anmeldung</Heading>
        <Form onSubmit={handleSubmit}>
          <Input
            value={attendee.name}
            autoFocus
            name="name"
            onChange={onChange}
            placeholder="Name, Vorname"
          />
          <Input
            value={attendee.address}
            name="address"
            onChange={onChange}
            placeholder="Adresse"
          />
          <Input
            value={attendee.location}
            name="location"
            onChange={onChange}
            placeholder="Ort, PLZ"
          />
          <Input value={attendee.email} name="email" onChange={onChange} placeholder="Email" />
          <Input value={attendee.phone} name="phone" onChange={onChange} placeholder="Telefon" />
          <Input
            value={attendee.workshop1}
            name="workshop1"
            onChange={onChange}
            placeholder="Workshop 1 (Theorie)"
          />
          <Input
            value={attendee.workshop2}
            name="workshop2"
            onChange={onChange}
            placeholder="Workshop 2 (Theorie)"
          />
          <Input
            value={attendee.workshop3}
            name="workshop3"
            onChange={onChange}
            placeholder="Workshop 3 (Praktisch)"
          />
          <Input value={attendee.else} name="else" onChange={onChange} placeholder="Sonstiges" />

          <TogglePopUp
            toggle={show => <Button onClick={show}>Anmelden</Button>}
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
