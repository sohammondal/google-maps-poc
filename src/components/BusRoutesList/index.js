import React from "react";

import Actions from "./Actions";
import { usePeekInfos } from "./hooks/usePeekInfos";

import BusRouteMap from "../BusRouteInfo/BusRouteMap";
import { getExtraInfoFromRoute } from "../../helpers";
import { useAppContext } from "../../context";

import "./styles.css";

const BusRoutes = () => {
  const { routes, delRoute } = useAppContext();

  const [peekInfoIds, togglePeekInfoIds] = usePeekInfos();

  if (!routes?.length) return null;

  return (
    <ul className="list-group bus-routes">
      <li className="list-group-item active">Bus Routes</li>
      {routes?.map((route, index) => {
        const {
          id,
          name,
          type,
          status,
          isActive,
          isGeneral,
          source,
          destination,
          stops
        } = getExtraInfoFromRoute(route);

        const statusBadge = (
          <span
            className={`mx-2 badge rounded-pill bg-${
              isActive ? "success" : "secondary"
            }`}
          >
            {status}
          </span>
        );

        const typeBadge = (
          <span
            className={`badge rounded-pill bg-${
              isGeneral ? "primary" : "info"
            }`}
          >
            {type}
          </span>
        );

        const peeked = peekInfoIds.includes(id);

        const actions = [
          {
            text: peeked ? "hide" : "peek",
            onClick: () => togglePeekInfoIds(id)
          },
          {
            to: {
              pathname: `/route/${route?.id}/edit`,
              state: { route, index }
            },
            text: "edit"
          },
          {
            to: {
              pathname: `/route/${route?.id}`,
              state: { route }
            },
            text: "more"
          },
          {
            text: "delete",
            onClick: () =>
              window.confirm("Are you sure, you want to delete?") &&
              delRoute(id)
          }
        ];

        const mapProps = {
          path: stops,
          source,
          destination
        };

        return (
          <li key={id} className="list-group-item p-3">
            <div className="row">
              <div className="col">
                <div className="d-flex align-items-center">
                  <span className="fs-5 me-2">{name}</span>
                  {typeBadge}
                  {statusBadge}
                </div>
              </div>
              <Actions actions={actions} />
            </div>
            <div className={`row ${peeked ? "" : "collapse"}`}>
              <div className="fw-light text-muted mb-2">
                {source?.name} <i className="bi bi-arrow-right"></i>{" "}
                {destination?.name}
              </div>
              <BusRouteMap {...mapProps} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BusRoutes;
