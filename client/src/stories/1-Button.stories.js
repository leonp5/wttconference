import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import Button from "../components/Button";
import BurgerButton from "../components/BurgerButton";

export default {
  title: "Button"
};

export function StandardButton() {
  return <Button onClick={action("clicked")}>{text("Button Label", "Abschicken")}</Button>;
}

export function Burger() {
  return <BurgerButton onClick={action("clicked")}></BurgerButton>;
}
