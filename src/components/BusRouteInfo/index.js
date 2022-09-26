import React from "react";

import BusRouteMap from "./BusRouteMap";

import { getExtraInfoFromRoute } from "../../helpers";

import "./styles.css";
import StopsPreview from "./StopsPreview";
import { NotFound404 } from "../../pages";

const BusRoute = ({ route }) => {
  if (!route) return <NotFound404 message="oops! bus route not found" />;

  const {
    name,
    type,
    status,
    stops,
    direction,
    source,
    destination,
    isDirectionUp
  } = getExtraInfoFromRoute(route);

  const busRouteMapProps = {
    source,
    destination,
    path: stops
  };

  return (
    <div className="bus-route-info w-100 my-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text text-muted">
            <StopsPreview stops={stops} isDirectionUp={isDirectionUp} />
          </p>
          <div className="row">
            <div className="col">
              <h6 className="text-muted">Total Stops</h6>
              <h5>{stops.length}</h5>
            </div>
            <div className="col">
              <h6 className="text-muted">Status</h6>
              <h5>{status}</h5>
            </div>
            <div className="col">
              <h6 className="text-muted">Type</h6>
              <h5>{type}</h5>
            </div>
            <div className="col">
              <h6 className="text-muted">Direction</h6>
              <h5>
                <i className={`bi bi-arrow-${direction?.toLowerCase()}`}></i>
                {direction}
              </h5>
            </div>
          </div>
        </div>
        <BusRouteMap {...busRouteMapProps} />
      </div>
    </div>
  );
};

export default BusRoute;
