import React from "react";

import { Button } from "./Button";

export default function SubmitButton({ props, children }) {
  return <Button {...props}>{children}</Button>;
}
