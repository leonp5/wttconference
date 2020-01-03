import React from "react";
import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

function Attendee(props) {
  return (
    <Row>
      <p>{props.name}</p>
      <p>{props.adress}</p>
      <p>{props.location}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.workshop1}</p>
      <p>{props.workshop2}</p>
      <p>{props.workshop3}</p>
      <p>{props.else}</p>
    </Row>
  );
}

export default Attendee;
