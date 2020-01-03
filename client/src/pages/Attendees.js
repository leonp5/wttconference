import React from "react";
import styled from "@emotion/styled";

import Heading from "../components/Heading";
// import { getAttendees } from "../api/attendees";

const Container = styled.div`
  display: flex;
`;

function Attendees() {
  const [attendees, setAttendees] = React.useState([]);

  React.useEffect(() => {
    // getAttendees();
  }, []);

  return (
    <>
      <Heading>Teilnehmer</Heading>
      <Container></Container>
    </>
  );
}

export default Attendees;
