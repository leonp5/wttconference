import React from "react";

import { Heading } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import AttendeeTable from "../components/Tables/AttendeeTable/AttendeeTable";
import useFetch from "../hooks/useFetch";
import { ToggleButton } from "../components/Buttons/ToggleButton";
import { ButtonWrapper } from "../components/Buttons/ButtonWrapper";
import WorkshopTable from "../components/Tables/WorkshopTable/WorkshopTable";

export default function Organization() {
  const [showAttendees, setShowAttendees] = React.useState(false);
  const [showWorkshops, setShowWorkshops] = React.useState(false);

  const attendees = useFetch("/api/attendees");
  const workshops = useFetch("/api/workshops");

  function toggleAttendees() {
    setShowAttendees(!showAttendees);
    if (showWorkshops) setShowWorkshops(false);
  }

  function toggleWorkshops() {
    setShowWorkshops(!showWorkshops);
    if (showAttendees) setShowAttendees(false);
  }

  return (
    <ContentWrapper>
      <Heading>Übersicht Teilnehmer & Workshops</Heading>
      <ButtonWrapper>
        <ToggleButton onClick={toggleAttendees}>Teilnehmer</ToggleButton>
        <ToggleButton onClick={toggleWorkshops}>Workshops</ToggleButton>
      </ButtonWrapper>
      {showAttendees ? <AttendeeTable attendees={attendees} /> : null}
      {showWorkshops ? <WorkshopTable workshops={workshops} /> : null}
    </ContentWrapper>
  );
}
