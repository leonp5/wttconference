import React from "react";

function Toggle(props) {
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

export default Toggle;
