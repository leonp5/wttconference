import React from "react";
import PropTypes from "prop-types";

import { PopUpBackground } from "./PopUpBackground";
import { PopUpContent } from "./PopUpContent";

export default function PopUp({ children }) {
  return (
    <PopUpBackground>
      <PopUpContent>{children}</PopUpContent>
    </PopUpBackground>
  );
}

PopUp.propTypes = {
  children: PropTypes.array
};
