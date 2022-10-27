import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import styled from "styled-components"
;
//   import { Box } from “../styles”;
function Map() {
  //   const [interventions, setInterventions] = useState([]);
  //   useEffect(() => {
  //     fetch(“/interventions”)
  //       .then((r) => r.json())
  //       .then(setInterventions);
  //   }, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // libraries: [“places”],
  });
  const mapRef = useRef();
  // calculates once and reuses it every time it re-renders
  const center = useMemo(() => ({ lat: -1.337, lng: 36.7758 }), []);
  const location_a = useMemo(() => ({ lat: 0.0917, lng: 34.768 }), []);
  const location_b = useMemo(() => ({ lat: 0.0352, lng: 36.3643 }), []);
  const location_c = useMemo(() => ({ lat: -1.333731, lng: 36.927109 }), []);
  const location_d = useMemo(() => ({ lat: 0.1545, lng: 37.3171 }), []);
  const options = useMemo(
    () => ({
      // mapId: “886d6323cb151ce5”, //not so secret
      mapId: "886d6323cb151ce5",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  //   optimize re-rendering
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  if (!isLoaded)
    return (
      <div>
        <Wrapper>
          <Logo>Loading...</Logo>
        </Wrapper>
      </div>
    );
  return (
    <Wrapper>
      {/* <Logo>View Incidence Locations</Logo> */}
      <Box>
        <GoogleMap zoom={15} center={center} options={options} onLoad={onLoad}>
          <MapContainer>
            <Marker position={center} />
            <Marker position={location_a} />
            <Marker position={location_b} />
            <Marker position={location_c} />
            <Marker position={location_d} />
            {/* {interventions.map((int) => (
              <Marker key={int.location} position={int.location} />
            ))} */}
          </MapContainer>
        </GoogleMap>
      </Box>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  max-width: 100%;
  margin: 40px auto;
padding: 16px;
`;
const MapContainer = styled.section`
//  width: 100%;
  height: 80vh;
// `;
const Logo = styled.h1`
//   font-family: “Permanent Marker”, serif;
//   font-size: 2rem;
//   color: white;
//   margin: 0;
//   line-height: 0;
//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;
const Box = styled.div`
// border-radius: 12px;
// box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
//   0 0 0 1px rgb(10 10 10 / 2%);
// padding: 16px;
`;
export default Map;