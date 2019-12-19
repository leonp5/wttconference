import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import SubmitButton from "../components/Button";
import MenuButton from "../components/MenuButton";

export default {
  title: "Button",
  decorators: [withKnobs]
};

export function StandardButton() {
  return (
    <SubmitButton
      onClick={action("clicked")}
      text={text("Button Label", "Abschicken")}
    ></SubmitButton>
  );
}

export function SideMenuButton() {
  return <MenuButton onClick={action("clicked")} text={text("Button Label", "Home")}></MenuButton>;
}
