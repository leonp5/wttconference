import styled from "@emotion/styled";
import React from "react";

import { PopUpBackground } from "./PopUpBackground";
import { PopUpContent } from "./PopUpContent";
import { Label } from "../Form/Labels";
import { BasicInput } from "../Form/InputFields";
import { Button } from "../Buttons/Button";
import { PropTypes } from "prop-types";

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
  return (
    <ModalBackground>
      <ModalContent>
        <Label>Email:</Label>
        <BasicInput></BasicInput>
        <Label>Passwort:</Label>
        <BasicInput></BasicInput>
        <Button>Einloggen</Button>
        {children}
      </ModalContent>
    </ModalBackground>
  );
}

LoginModal.propTypes = {
  children: PropTypes.array
};
