import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import MobileMenu from "../components/MobileMenu";

export default {
  title: "Menu",
  decorators: [withKnobs]
};

export function SideMenu() {
  return (
    <MobileMenu>
      <a onClick={action("clicked")}>Home</a>
      <a onClick={action("clicked")}>Programm</a>
      <a onClick={action("clicked")}>Workshops</a>
      <a onClick={action("clicked")}>Anmeldung</a>
      <a onClick={action("clicked")}>Mitfahren</a>
      <a onClick={action("clicked")}>Über uns</a>
    </MobileMenu>
  );
}
