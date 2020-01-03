import React from "react";
import { Table, StyledTH, StyledTR, StyledTD } from "./Table";

AttendeeTable.TH = function TH({ children, props }) {
  return <StyledTH {...props}>{children}</StyledTH>;
};

AttendeeTable.TR = function TR(props) {
  return <StyledTR {...props} />;
};

AttendeeTable.TD = function TD(props) {
  return <StyledTD {...props} />;
};

function AttendeeTable(props) {
  return <Table {...props} />;
}

export default AttendeeTable;
