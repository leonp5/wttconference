import React from "react";
import PropTypes from "prop-types";

import { Table, TableRow, TableData, TableHeaderRow, TableHeader } from "./TableComponents";

export default function AttendeeTable({ ...props }) {
  const ContentTH = [
    "Name",
    "Adresse",
    "Wohnort",
    "Email",
    "Telefon",
    "Hochschule",
    "Geschlecht",
    "Ernährung",
    "Sonstiges"
  ];

  const Rows = props.attendees.map((attendee, name) => (
    <TableRow key={name}>
      {Object.values(attendee).map((attendeeData, name) => (
        <TableData key={name}>{attendeeData}</TableData>
      ))}
    </TableRow>
  ));

  return (
    <Table>
      <thead>
        <TableHeaderRow>
          {ContentTH.map((TableHeadings, name) => (
            <TableHeader key={name}>{TableHeadings}</TableHeader>
          ))}
        </TableHeaderRow>
      </thead>
      <tbody>{Rows}</tbody>
    </Table>
  );
}

AttendeeTable.propTypes = {
  attendees: PropTypes.array
};
