import React from "react";

import Heading from "../components/Heading";
import { getAttendees } from "../api/attendees";
import ContentWrapper from "../components/ContentWrapper";
import AttendeeTable from "../components/Table/AttendeeTable";

function Attendees() {
  const [attendees, setAttendees] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await getAttendees();
      setAttendees(result);
    }
    fetchData();
  }, []);

  return (
    <ContentWrapper>
      <Heading>Teilnehmer</Heading>
      <AttendeeTable data={attendees} />
    </ContentWrapper>
  );
}

export default Attendees;
