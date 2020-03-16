import React from "react";
import styled from "@emotion/styled";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import useDeviceDetect from "../hooks/useDeviceDetect";
import useZoomControl from "../hooks/useZoomControl";

const MapContainer = styled(Map)`
  width: 100%;
  height: 400px;
  position: relative;
  z-index: 0;

  ::after {
    justify-content: center;
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    content: ${props => JSON.stringify(props.warning)};
    padding: 15px;
    position: absolute;
    z-index: 400;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.transparentBackground};
    pointer-events: none;
    opacity: ${({ active }) => (active ? "1" : "0")};
    transition: opacity 0.5s ease-in-out;
  }
`;

export default function ContactMap() {
  const [active, setActive] = React.useState(null);
  const [warning, setWarning] = React.useState();

  const mapElement = React.useRef();
  const isMobile = useDeviceDetect({ mapElement });

  React.useEffect(() => {
    if (isMobile) {
      setWarning("Verwende zwei Finger um die Karte zu bewegen");
    }
    if (!isMobile) {
      setWarning("Verwende Strg+Scrollen zum Zoomen der Karte");
    }
    if (!isMobile && navigator.platform.toUpperCase().indexOf("MAC") >= 0) {
      setWarning("Verwende cmd+Scrollen zum Zoomen der Karte");
    }
  }, [isMobile]);

  function enableListener() {
    document.addEventListener("wheel", showZoomHint);
    document.addEventListener("dblclick", showZoomHint);
    document.addEventListener("touchstart", showDragHint);
  }

  function showZoomHint(e) {
    if (e.type === "wheel" || "dblclick") setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 2500);
    document.removeEventListener("wheel", showZoomHint);
    document.removeEventListener("dblclick", showZoomHint);
  }

  function showDragHint(e) {
    if (e.type === "touchstart" && e.touches.length === 1) {
      setActive(true);
      document.addEventListener("touchend", removeDragHint);
      document.addEventListener("touchcancel", showDragHint);
    }
    document.removeEventListener("touchstart", showDragHint);
  }

  function removeDragHint(e) {
    if (e.type === "touchend" || ("touchcancel" && e.touches.length === 1)) {
      setActive(false);
    }
    document.removeEventListener("touchend", showDragHint);
    document.removeEventListener("touchcancel", showDragHint);
  }

  function disableListener() {
    setActive(false);
    document.removeEventListener("wheel", showZoomHint);
    document.removeEventListener("dblclick", showZoomHint);
    document.removeEventListener("touchend", removeDragHint);
    document.removeEventListener("touchcancel", removeDragHint);
  }

  useZoomControl({ mapElement, setActive });

  const position = [49.50527, 8.49983];

  return (
    <MapContainer
      warning={warning}
      active={active}
      ref={mapElement}
      onMouseOver={enableListener}
      onWheel={enableListener}
      onMouseMove={enableListener}
      onMouseOut={disableListener}
      center={position}
      zoom={16}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        id="mapbox/streets-v11"
      />
      <Marker position={position}>
        <Popup>
          Adresse: <br />
          Zielstraße 28, 68167 Mannheim
        </Popup>
      </Marker>
    </MapContainer>
  );
}
