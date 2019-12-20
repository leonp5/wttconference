import React from "react";

import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

function AttendeeRegistration() {
  const [state, setState] = React.useState({
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
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/attendees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        state
      })
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="name" onChange={onChange} placeholder="Name, Vorname"></Input>
        <Input name="address" onChange={onChange} placeholder="Adresse"></Input>
        <Input name="location" onChange={onChange} placeholder="Ort, PLZ"></Input>
        <Input name="email" onChange={onChange} placeholder="Email"></Input>
        <Input name="phone" onChange={onChange} placeholder="Telefon"></Input>
        <Input name="workshop1" onChange={onChange} placeholder="Workshop 1 (Theorie)"></Input>
        <Input name="workshop2" onChange={onChange} placeholder="Workshop 2 (Theorie)"></Input>
        <Input name="workshop3" onChange={onChange} placeholder="Workshop 3 (Praktisch)"></Input>
        <Input name="else" onChange={onChange} placeholder="Sonstiges"></Input>
        <Button>Anmelden</Button>
      </Form>
    </>
  );
}

export default AttendeeRegistration;
