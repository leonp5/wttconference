import React from "react";

import Heading from "../components/Heading";

import { getAttendees } from "../api/attendees";
import AttendeeList from "../components/AttendeeList";
import Attendee from "../components/Attendee";
import ContentWrapper from "../components/ContentWrapper";

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
      <AttendeeList>
        {attendees.map(attendee => (
          <Attendee
            key={attendee._id}
            name={attendee.name}
            adress={attendee.adress}
            location={attendee.location}
            email={attendee.email}
            phone={attendee.phone}
            workshop1={attendee.workshop1}
            workshop2={attendee.workshop2}
            workshop3={attendee.workshop3}
            else={attendee.else}
          />
        ))}
      </AttendeeList>
    </ContentWrapper>
  );
}

export default Attendees;
