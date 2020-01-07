import React from "react";

import Heading from "../components/Heading";
import ContentWrapper from "../components/ContentWrapper";
import AttendeeTable from "../components/Table/AttendeeTable";
import useFetch from "../hooks/useFetch";

export default function Attendees() {
  const attendees = useFetch("/api/attendees");
  console.log(attendees);

  attendees.map(attendee => {
    delete attendee._id;
  });

  return (
    <ContentWrapper>
      <Heading>Teilnehmer</Heading>

      <AttendeeTable attendees={attendees} />
    </ContentWrapper>
  );
}
