import React from "react";
import { Table, TableRow, TableData, TableHeader } from "./Table";

AttendeeTable.TH = function TH({ children, ...props }) {
  return <TableHeader {...props}>{children}</TableHeader>;
};

AttendeeTable.TR = function TR(props) {
  return <TableRow {...props} />;
};

AttendeeTable.TD = function TD({ children, ...props }) {
  return <TableData {...props}>{children}</TableData>;
};

function AttendeeTable({ children, props }) {
  const Rows = props.data.map((el, _id) => (
    <AttendeeTable.TR key={_id}>
      {Object.values(el).map((el, _id) => (
        <AttendeeTable.TD key={_id}>{el}</AttendeeTable.TD>
      ))}
    </AttendeeTable.TR>
  ));

  return (
    <Table {...props}>
      {Rows}
      {children}
    </Table>
  );
}

export default AttendeeTable;
