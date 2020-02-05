import React from "react";
import PropTypes from "prop-types";

import { Table, TableRow, TableHeaderRow, TableHeader } from "./TableComponents";
import { WorkshopTD } from "./WorkshopTD";

export default function WorkshopTable({ ...props }) {
  const ContentTH = ["Name", "Vorname", "Email", "Workshop", "Workshop Beschreibung", "Nachricht"];

  const Rows = props.workshops.map((workshop, name) => (
    <TableRow key={name}>
      {Object.values(workshop).map((workshopData, name) => (
        <WorkshopTD key={name}>{workshopData}</WorkshopTD>
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

WorkshopTable.propTypes = {
  workshops: PropTypes.array
};
