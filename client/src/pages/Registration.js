import React from "react";
import styled from "@emotion/styled";

import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Toggle from "../hooks/Toggle";
import PopUpContent from "../components/PopUp/PopUpContent";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  height: 100vh;
  background: ${props => props.theme.colors.secondary};
`;

const Container = styled.div``;

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

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:8000/attendees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: attendee.name,
        address: attendee.address,
        location: attendee.location,
        email: attendee.email,
        phone: attendee.phone,
        workshop1: attendee.workshop1,
        workshop2: attendee.workshop2,
        workshop3: attendee.workshop3,
        else: attendee.else
      })
    });
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
              <PopUpContent>
                <p>Vielen Dank für deine Anmeldung</p>
                <Button onClick={hide}>Close</Button>
              </PopUpContent>
            )}
          />
        </Form>
      </Container>
    </ContentWrapper>
  );
}

export default Registration;
