import { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  InfoWindow
} from "react-google-maps";

import { defaultRouteMapProps, getSubstractor } from "./helpers";

import { countDecimals } from "../../../helpers";

const DEFAULT_ZOOM = 14;

const GMap = (props) => {
  const { source, destination, path } = props || {};
  const defaultCenter = {
    lat: source?.lat - getSubstractor(countDecimals(source?.lat)),
    lng: destination?.lng - getSubstractor(countDecimals(destination?.lng))
  };

  const [selectedPath, setSelectedPath] = useState();

  /* const image = {
    url: "/assets/destination.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new window.google.maps.Size(25, 32),
    // The origin for this image is (0, 0).
    origin: new window.google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new window.google.maps.Point(5, 31)
  }; */

  return (
    <GoogleMap defaultZoom={DEFAULT_ZOOM} defaultCenter={defaultCenter}>
      {path.map((p) => {
        return (
          <Marker
            key={p?.id}
            title={p?.name}
            position={p}
            onClick={() => {
              setSelectedPath(p);
            }}
          />
        );
      })}
      <Polyline
        path={path}
        geodesic
        options={{
          strokeColor: "#ff2527",
          strokeOpacity: 0.75,
          strokeWeight: 2
        }}
      />
      {selectedPath ? (
        <InfoWindow
          position={selectedPath}
          onCloseClick={() => setSelectedPath()}
        >
          <span>{selectedPath?.name}</span>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

const WrappedGMap = withScriptjs(withGoogleMap(GMap));

const BusRouteMap = (props) => (
  <WrappedGMap {...defaultRouteMapProps} {...props} />
);

export default BusRouteMap;
