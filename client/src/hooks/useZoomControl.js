import React from "react";

export default function useZoomControl({ mapElement, setActive }) {
  React.useEffect(() => {
    function keyDownListener() {
      document.addEventListener("keydown", enableZoom);
      return () => document.removeEventListener("keydown", enableZoom);
    }

    function touchStartListener() {
      document.addEventListener("touchmove", enableZoom);
      return () => DocumentFragment.removeEventListener("touchmove", enableZoom);
    }

    function enableZoom(e) {
      if (e.ctrlKey || e.metaKey) {
        setActive(false);
        mapElement.current.contextValue.layerContainer.scrollWheelZoom.enable();
        mapElement.current.contextValue.layerContainer.touchZoom.enable();
        mapElement.current.contextValue.layerContainer.doubleClickZoom.enable();
        document.addEventListener("keyup", disableZoom);
      }
      if (e.type === "touchmove" && e.touches.length === 2) {
        setActive(false);
        mapElement.current.contextValue.layerContainer.dragging.enable();
        document.addEventListener("touchend", disableZoom);
      }
    }
    function disableZoom(e) {
      if (e.type === "keyup") {
        mapElement.current.contextValue.layerContainer.scrollWheelZoom.disable();
        mapElement.current.contextValue.layerContainer.touchZoom.disable();
        mapElement.current.contextValue.layerContainer.doubleClickZoom.disable();
        document.removeEventListener("keyup", disableZoom);
      }
      if (e.type === "touchend") {
        mapElement.current.contextValue.layerContainer.dragging.disable();
        document.removeEventListener("touchend", disableZoom);
      }
    }

    keyDownListener();
    touchStartListener();
  }, [mapElement, setActive]);
}
