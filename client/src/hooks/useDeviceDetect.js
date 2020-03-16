import React from "react";

export default function useDeviceDetect({ mapElement }) {
  const [touch, setTouch] = React.useState();

  function handleDetect(e) {
    if (e.type === "wheel") {
      setTouch(false);
    } else if (e.type === "touchstart") setTouch(true);
  }

  React.useEffect(() => {
    function addMouseListener() {
      window.addEventListener("wheel", handleDetect);
      return () => window.removeEventListener("wheel", handleDetect);
    }

    function addTouchListener() {
      window.addEventListener("touchstart", handleDetect);
      return () => window.removeEventListener("touchstart", handleDetect);
    }
    addTouchListener();
    addMouseListener();

    if (touch) {
      mapElement.current.contextValue.layerContainer.dragging.disable();
    }

    if (!touch) {
      mapElement.current.contextValue.layerContainer.doubleClickZoom.disable();
      mapElement.current.contextValue.layerContainer.scrollWheelZoom.disable();
    }
  }, [touch, mapElement]);

  return touch;
}
