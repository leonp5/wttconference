import styled from "@emotion/styled";
import React from "react";
import { CheckBox } from "../Form/InputFields";
import { CheckBoxText } from "../Text";
import { SmallInlineLink } from "../Navigation/NavLinks";

export const Container = styled.div`
  display: flex;
`;

export default function CheckBoxContainer(isChecked, setIsChecked) {
  return (
    <Container>
      <CheckBox
        type="checkbox"
        defaultChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />{" "}
      <CheckBoxText>
        Ich habe die <SmallInlineLink to="/privacy">Datenschutzbestimmungen</SmallInlineLink> zur
        Kenntnis genommen.
      </CheckBoxText>
    </Container>
  );
}
