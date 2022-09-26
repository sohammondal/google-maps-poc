import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Stops from "./Stops";
import { withInlineCheckbox, withInlineTextInput } from "./FormInputs";
import { directionData, statusData, routeTypeData } from "./helpers";

import { generateUUID, isObjectEmpty } from "../../helpers";
import { useAppContext } from "../../context";

import "./styles.css";

const RouteEntryForm = ({ route, index }) => {
  const isEditMode = !isObjectEmpty(route);

  const [routeName, setRouteName] = useState(route?.name || "");
  const [direction, setDirection] = useState(route?.direction || "");
  const [routeType, setRouteType] = useState(route?.type || "");
  const [routeStatus, setRouteStatus] = useState(route?.status || "");
  const [stops, setStops] = useState(route?.stops || []);
  const [error, setError] = useState("");
  useEffect(() => {
    stops.length >= 2 && setError("");
  }, [stops]);

  const { addRoute, editRoute } = useAppContext();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stops.length < 2) {
      setError("Atleast 2 Stops needed");
      return;
    }

    let toastMessage = "Bus route added! 😃";

    if (isEditMode) {
      editRoute(
        {
          id: route.id,
          name: routeName,
          direction,
          status: routeStatus,
          type: routeType,
          stops
        },
        index
      );
      toastMessage = `${route.name} edited! 😃`;
    } else {
      addRoute({
        id: generateUUID(),
        name: routeName,
        direction,
        status: routeStatus,
        type: routeType,
        stops
      });
    }

    toast.success(toastMessage);
    history.push("/");
  };

  const RouteName = withInlineTextInput({
    value: routeName,
    onChange: setRouteName,
    placeholder: "Route Name",
    label: "Name"
  });

  const RouteType = withInlineCheckbox({
    value: routeType,
    title: "Type",
    onChange: setRouteType,
    data: routeTypeData
  });

  const RouteStatus = withInlineCheckbox({
    value: routeStatus,
    title: "Status",
    onChange: setRouteStatus,
    data: statusData
  });

  const Direction = withInlineCheckbox({
    value: direction,
    title: "Direction",
    onChange: setDirection,
    data: directionData
  });

  return (
    <div className="card w-100 route-entry-card">
      <div className="card-body">
        <form className="mt-2 mb-4" onSubmit={handleSubmit}>
          {RouteName}
          <RouteType />
          <RouteStatus />
          <Direction />
          <Stops stops={stops} setStops={setStops} error={error} />
          <button type="submit" className="btn btn-primary">
            {isEditMode ? "Save" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RouteEntryForm;
