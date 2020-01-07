import React from "react";

export default function TogglePopUp(props) {
  const [isShown, setIsShown] = React.useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {props.toggle(show)}
      {isShown && props.content(hide)}
    </>
  );
}
