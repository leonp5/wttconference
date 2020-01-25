import React from "react";
import styled from "@emotion/styled";
import ReactMapGL, { Popup } from "react-map-gl";

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;

export default function ContactMap() {
  const [viewport, setViewport] = React.useState({
    latitude: 49.50509,
    longitude: 8.49734,
    width: "100%",
    height: "100%",
    zoom: 16
  });

  return (
    <>
      <MapContainer>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          <Popup latitude={49.50509} longitude={8.49734}>
            Test
          </Popup>
        </ReactMapGL>
      </MapContainer>
    </>
  );
}
