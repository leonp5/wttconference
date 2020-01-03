import React from "react";
import styled from "@emotion/styled";

const Table = styled.table`
  width: 100%;
  overflow-x: auto;
`;

const TableHeader = styled.th``;

const Row = styled.tr``;

function AttendeeList() {
  return (
    <Table>
      <Row>
        <TableHeader>Name</TableHeader>
        <TableHeader>Adresse</TableHeader>
        <TableHeader>Wohnort</TableHeader>
        <TableHeader>Email</TableHeader>
        <TableHeader>Telefon</TableHeader>
        <TableHeader>Workshop1</TableHeader>
        <TableHeader>Workshop2</TableHeader>
        <TableHeader>Workshop3</TableHeader>
        <TableHeader>Sonstiges</TableHeader>
      </Row>
      {/* <Row>{children}</Row> */}
    </Table>
  );
}

export default AttendeeList;
