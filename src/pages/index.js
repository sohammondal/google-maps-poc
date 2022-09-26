import React, { lazy } from "react";
import { Link, useParams } from "react-router-dom";

import BusRoutesList from "../components/BusRoutesList";
import { routesStore } from "../utils/routesStore";

import "./styles.css";

const RouteBulkUploader = lazy(() => import("../components/RouteBulkUploader"));
const RouteEntryForm = lazy(() => import("../components/RouteEntryForm"));
const BusRouteInfo = lazy(() => import("../components/BusRouteInfo"));
const RouteBulkExporter = lazy(() => import("../components/RouteBulkExporter"));

const Home = () => (
  <div className="home h-50">
    <BusRoutesList />
    <div className="row my-3">
      <Link to="/route/add" className="w-max-content">
        Add New Bus Route
      </Link>
      <RouteBulkExporter />
    </div>
  </div>
);

const AddBusRoute = () => (
  <div className="flex-center flex-column w-100">
    <RouteBulkUploader />
    <div className="my-3 text-muted">
      OR (alternately fill up the form below to add a new bus route)
    </div>
    <RouteEntryForm />
  </div>
);

const EditBusRoute = (props) => {
  const { route, index } = props.location.state || {};
  return (
    <>
      <RouteEntryForm route={route} index={index} />
    </>
  );
};

const BusRoute = (props) => {
  const { routeId } = useParams();

  const route = props.location?.state?.route || routesStore.get(routeId);

  return (
    <>
      <BusRouteInfo route={route} />
    </>
  );
};

const NotFound404 = ({
  message = "Opps, the page you're looking for doesn't exisit"
}) => (
  <div className="fullscreen flex-center flex-column">
    <h3>{message}</h3>
    <Link to="/" className="link-primary">
      Return Home
    </Link>
  </div>
);

export { Home, BusRoute, AddBusRoute, EditBusRoute, NotFound404 };
