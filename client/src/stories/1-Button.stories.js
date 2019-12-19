import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import SubmitButton from "../components/Button";
import MenuButton from "../components/MenuButton";
import BurgerButton from "../components/BurgerButton";

export default {
  title: "Button"
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

export function Burger() {
  return <BurgerButton onClick={action("clicked")}></BurgerButton>;
}
