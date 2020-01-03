import React from "react";
import styled from "@emotion/styled";

import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Toggle from "../components/Toggle";
import PopUpContent from "../components/PopUp/PopUpContent";
import PopUpBackground from "../components/PopUp/PopUpBackground";
import NavLink from "../components/NavLink";
import { saveAttendee } from "../api/attendees";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  height: 100vh;
  background: ${props => props.theme.colors.secondary};
`;

const Container = styled.div``;

const Link = styled(NavLink)`
  color: ${props => props.theme.colors.actioncolor};
  &:hover {
    background: ${props => props.theme.colors.actioncolor};
    color: ${props => props.theme.colors.secondary};
  }
`;

function Registration() {
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
    saveAttendee({ ...attendee });
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

          <Toggle
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

export default Registration;
