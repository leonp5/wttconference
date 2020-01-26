import React, { useEffect } from "react";
import styled from "@emotion/styled";
// import ReactMapGL, { Popup } from "react-map-gl";
import L from "leaflet";
import { useRef } from "react";
// import { useState } from "react";

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;

//

export default function ContactMap() {
  const position = [49.50509, 8.49734];
  useEffect(() => {
    L.map("map", {
      center: position,
      zoom: 16,

      layers: [
        L.tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox/streets-v11"
          }
        )
      ]
    });
  }, [position]);

  return <MapContainer id="map"></MapContainer>;
}

// export default function ContactMap() {
//   const [viewport, setViewport] = React.useState({
//     latitude: 49.50509,
//     longitude: 8.49734,
//     width: "100%",
//     height: "100%",
//     zoom: 16
//   });

//   return (
//     <>
//       <MapContainer>
//         <ReactMapGL
//           {...viewport}
//           mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//           mapStyle="mapbox://styles/mapbox/streets-v11"
//           onViewportChange={viewport => {
//             setViewport(viewport);
//           }}
//         >
//           <Popup latitude={49.50509} longitude={8.49734}>
//             Test
//           </Popup>
//         </ReactMapGL>
//       </MapContainer>
//     </>
//   );
// }

// const Marker = styled.div``;

// export default function ContactMap() {
//   const [lng, setLng] = React.useState(8.49734);
//   const [lat, setLat] = React.useState(49.50509);
//   const [zoom, setZoom] = React.useState(16);
//   const mapRef = React.useRef();

//   function generateMap() {
//     const mapData = {
//       container: mapRef.current,
//       center: [lng, lat],
//       zoom: zoom
//     };
//     const map = new L.map(mapData);

//     map.on("move", () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lng.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });
//   }

//   React.useEffect(() => {
//     generateMap();
//   }, []);

//   return <MapContainer ref={mapRef}></MapContainer>;
// }
