import React from "react";
import { BasicInput } from "../components/InputFields";

export default {
  title: "Input"
};

export function DefaultInput() {
  return <BasicInput placeholder={"Name, Vorname"}></BasicInput>;
}
