import React from "react";
import { InputField } from "../components/InputField";

export default {
  title: "Input"
};

export function DefaultInput() {
  return <InputField placeholder={"Name, Vorname"}></InputField>;
}
