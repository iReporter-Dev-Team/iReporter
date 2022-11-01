import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
//   import { Box } from “../styles”;
function Map() {
  const [interventions, setInterventions] = useState([]);
  const [redFlags, setRedFlags] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/interventions")
      .then((r) => r.json())
      .then((interventions) => setInterventions(interventions))
      .catch((err) => setErrors(err.errors));
  }, []);

  useEffect(() => {
    fetch("/redflags")
      .then((r) => r.json())
      .then((redFlags) => setRedFlags(redFlags))
      .catch((err) => setErrors(err.errors));
  }, []);

  const interventionMarkers = interventions.map((intervention) => {
    const center = { lat: intervention.latitude, lng: intervention.longitude };
    return center;
  });

  const redFlagMarkers = redFlags.map((redFlag) => {
    const center = { lat: redFlag.latitude, lng: redFlag.longitude };
    return center;
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // libraries: ["places"],
  });
  const mapRef = useRef();
  // calculates once and reuses it every time it re-renders
  const center = useMemo(() => ({ lat: -1.289852, lng: 36.809275 }), []);
  // const location_a = useMemo(() => ({ lat: 0.0917, lng: 34.768 }), []);
  // const location_b = useMemo(() => ({ lat: 0.0352, lng: 36.3643 }), []);
  // const location_c = useMemo(() => ({ lat: -1.333731, lng: 36.927109 }), []);
  // const location_d = useMemo(() => ({ lat: 0.1545, lng: 37.3171 }), []);

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
      <Box>
        <GoogleMap zoom={7} center={center} options={options} onLoad={onLoad}>
          <MapContainer>
            {interventionMarkers.map((int) => (
              <Marker key={int.id} position={int} />
            ))}
            {redFlagMarkers.map((red) => (
              <Marker key={red.id} position={red} />
            ))}
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
  // width: 100%;
  height: 80vh;
`;
const Logo = styled.h1`
  // font-family: “Permanent Marker”, serif;
  // font-size: 2rem;
  // color: white;
  // margin: 0;
  // line-height: 0;
  // a {
  //   color: inherit;
  //   text-decoration: none;
  // }
`;
const Box = styled.div`
  // border-radius: 12px;
  // box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
  //   0 0 0 1px rgb(10 10 10 / 2%);
  // padding: 16px;
`;
export default Map;
