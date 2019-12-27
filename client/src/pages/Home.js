import React from "react";

import Button from "../components/Button";
import Toggle from "../hooks/Toggle";
import PopUpContent from "../components/PopUp/PopUpContent";

function Home() {
  return (
    <p>
      Click to reveal a secret:
      <Toggle
        toggle={show => <Button onClick={show}>Open</Button>}
        content={hide => (
          <PopUpContent>
            <p>Vielen Dank für deine Anmeldung</p>
            <Button onClick={hide}>Close</Button>
          </PopUpContent>
        )}
      />
    </p>
  );
}

export default Home;
