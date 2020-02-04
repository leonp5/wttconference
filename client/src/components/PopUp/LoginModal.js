import styled from "@emotion/styled";
import React from "react";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";

import { PopUpBackground } from "./PopUpBackground";
import { PopUpContent } from "./PopUpContent";
import { Label } from "../Form/Labels";
import { BasicInput } from "../Form/InputFields";
import { CenterButton } from "../Buttons/CenterButton";
import { Button } from "../Buttons/Button";
import { AlertText } from "../Text";
import { Form } from "../Form/Form";

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
  position: relative;
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

export default function LoginModal({ handleClose, children }) {
  const history = useHistory();

  const [user, setUser] = React.useState({
    name: "",
    password: ""
  });

  const [displayMessage, setDisplayMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState();

  async function login(name, password) {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, password })
    });

    const data = await response.json();

    if (response.status !== 200) {
      setErrorMessage(data);
      setDisplayMessage(true);
    } else {
      setDisplayMessage(false);
      sessionStorage.setItem("token:", data.token);
      handleClose();
      history.push("/organization");
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(user.name, user.password);
  }

  return (
    <ModalBackground>
      <ModalContent>
        {displayMessage && <AlertText>{errorMessage}</AlertText>}
        <Form onSubmit={handleSubmit}>
          <Label>Name:</Label>
          <BasicInput name="name" value={user.name} onChange={handleChange}></BasicInput>
          <Label>Passwort:</Label>
          <BasicInput
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          ></BasicInput>
          <CenterButton>
            <Button disabled={!user.password || !user.name}>Einloggen</Button>
          </CenterButton>
        </Form>
        {children}
      </ModalContent>
    </ModalBackground>
  );
}

LoginModal.propTypes = {
  children: PropTypes.object,
  handleClose: PropTypes.func
};
