import React from "react";

import { Heading } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import AttendeeTable from "../components/Tables/AttendeeTable/AttendeeTable";
import useFetch from "../hooks/useFetch";

export default function Attendees() {
  const attendees = useFetch("/api/attendees");

  return (
    <ContentWrapper>
      <Heading>Teilnehmer</Heading>

      <AttendeeTable attendees={attendees} />
    </ContentWrapper>
  );
}
