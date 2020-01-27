import React from "react";
import styled from "@emotion/styled";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const MapContainer = styled(Map)`
  width: 100%;
  height: 400px;
  z-index: 0;
`;

export default function ContactMap() {
  const position = [49.50509, 8.49734];

  return (
    <MapContainer center={position} zoom={16}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        id="mapbox/streets-v11"
      />
      <Marker position={position}>
        <Popup>
          Adresse: <br />
          Am Exerzierplatz 21, 68167 Mannheim
        </Popup>
      </Marker>
    </MapContainer>
  );
}
