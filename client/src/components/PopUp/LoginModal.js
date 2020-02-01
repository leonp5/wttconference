import styled from "@emotion/styled";
import React from "react";

import { PopUpBackground } from "./PopUpBackground";
import { PopUpContent } from "./PopUpContent";
import { Label } from "../Form/Labels";
import { BasicInput } from "../Form/InputFields";
import { Button } from "../Buttons/Button";
import { PropTypes } from "prop-types";
import { AlertText } from "../Text";

const ModalBackground = styled(PopUpBackground)`
  animation: fadein 0.3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled(PopUpContent)`
  animation: fadein 0.3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function LoginModal({ children }) {
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

  const [displayMessage, setDisplayMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState();

  async function login(email, password) {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.status !== 200) {
      setErrorMessage(data);
      setDisplayMessage(true);
    } else {
      setDisplayMessage(false);
      localStorage.setItem("Token:", data.token);
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value
    });
  }

  function handleClick(event) {
    event.preventDefault();
    login(user.email, user.password);
  }

  return (
    <ModalBackground>
      <ModalContent>
        {displayMessage && <AlertText>{errorMessage}</AlertText>}
        <Label>Email:</Label>
        <BasicInput name="email" value={user.email} onChange={handleChange}></BasicInput>
        <Label>Passwort:</Label>
        <BasicInput
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        ></BasicInput>
        <Button onClick={handleClick}>Einloggen</Button>
        {children}
      </ModalContent>
    </ModalBackground>
  );
}

LoginModal.propTypes = {
  children: PropTypes.object
};
