import React from "react";

import Button from "../components/Button";
import Toggle from "../hooks/Toggle";
import PopUpContent from "../components/PopUp/PopUpContent";
import PopUpBackground from "../components/PopUp/PopUpBackground";
import Heading from "../components/Heading";

function Home() {
  return (
    <>
      <Heading>Home</Heading>
      {/* Thats for testing the PopUp and will removed after development */}
      <p>
        Click to reveal a secret:
        <Toggle
          toggle={show => <Button onClick={show}>Open</Button>}
          content={hide => (
            <PopUpBackground>
              <PopUpContent>
                <p>Vielen Dank für deine Anmeldung!</p>
                <Button onClick={hide}>Close</Button>
              </PopUpContent>
            </PopUpBackground>
          )}
        />
      </p>
    </>
  );
}

export default Home;
