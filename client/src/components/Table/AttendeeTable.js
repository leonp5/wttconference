import React from "react";

import { Table, TableRow, TableData, TableHeaderRow, TableHeader } from "./Table";

function AttendeeTable({ ...props }) {
  const ContentTH = [
    "Name",
    "Adresse",
    "Wohnort",
    "Email",
    "Telefon",
    "Workshop1",
    "Workshop2",
    "Workshop3",
    "Sonstiges"
  ];

  const Rows = props.attendees.map((attendee, index) => (
    <TableRow key={index}>
      {Object.values(attendee).map((attendeeData, index) => (
        <TableData key={index}>{attendeeData}</TableData>
      ))}
    </TableRow>
  ));

  return (
    <Table>
      <thead>
        <TableHeaderRow>
          {ContentTH.map((TableHeadings, index) => (
            <TableHeader key={index}>{TableHeadings}</TableHeader>
          ))}
        </TableHeaderRow>
      </thead>
      <tbody>{Rows}</tbody>
    </Table>
  );
}

export default AttendeeTable;
