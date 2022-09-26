const googleMapURL =
  "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";

export const defaultRouteMapProps = {
  googleMapURL,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

export const getSubstractor = (count = 0) =>
  count ? Number((0.0).toFixed(count - 2) + "20") : 0;
