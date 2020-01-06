import React from "react";
import { Table, TableRow, TableData, TableHeader } from "./Table";

function AttendeeTable({ children, ...props }) {
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
    <Table {...props}>
      <thead>
        <TableRow>
          {ContentTH.map((TableHeadings, key) => (
            <TableHeader key={key}>{TableHeadings}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>{Rows}</tbody>
    </Table>
  );
}

export default AttendeeTable;
