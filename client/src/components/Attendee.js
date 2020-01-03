import React from "react";
import styled from "@emotion/styled";

const TableDetail = styled.td``;

function Attendee(props) {
  return (
    <>
      <TableDetail>{props.name}</TableDetail>
      <TableDetail>{props.adress}</TableDetail>
      <TableDetail>{props.location}</TableDetail>
      <TableDetail>{props.email}</TableDetail>
      <TableDetail>{props.phone}</TableDetail>
      <TableDetail>{props.workshop1}</TableDetail>
      <TableDetail>{props.workshop2}</TableDetail>
      <TableDetail>{props.workshop3}</TableDetail>
      <TableDetail>{props.else}</TableDetail>
    </>
  );
}

export default Attendee;
