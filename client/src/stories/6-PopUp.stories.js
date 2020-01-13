import React from "react";
import { text } from "@storybook/addon-knobs";

import { PopUpBackground } from "../components/PopUp/PopUpBackground";
import { PopUpContent } from "../components/PopUp/PopUpContent";

export default {
  title: "PopUp"
};

export function BasicPopUp() {
  return (
    <PopUpBackground>
      <PopUpContent>{text("PopUp Content", "PopUp Content")}</PopUpContent>
    </PopUpBackground>
  );
}
