import React from "react";
import { text } from "@storybook/addon-knobs";

import AppBar from "../components/Navigation/AppBar";

export default {
  title: "AppBar"
};

export function AppBarNavigation() {
  return (
    <AppBar>
      <a>{text("Button Label", "Home")}</a>
    </AppBar>
  );
}
