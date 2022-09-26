import React from "react";
import { generateUUID } from "../../../helpers";

import Stop from "./Stop";

import "./styles.css";

const Stops = ({ stops, setStops, error }) => {
  const addStop = () =>
    setStops((stops) => [...stops, { id: generateUUID(), name: "" }]);
  const removeStop = (id) =>
    setStops((stops) => stops.filter((stop) => stop.id !== id));
  const handleChange = (key, value, index) =>
    setStops((stops) => {
      const item = { ...stops[index], [key]: value };
      return [...stops.splice(0, index), item, ...stops.splice(index + 1)];
    });

  const addStopElem = (
    <div className="d-grid gap-2 col-6 my-3">
      <button
        className="btn btn-outline-primary add-stoppage-btn"
        onClick={addStop}
      >
        + add new stop
      </button>
    </div>
  );

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <label className="form-label me-2 fs-5 fw-bold">Stops</label>
        </div>
        <div className="col">
          {error && <div className="invalid-feedback stops-error">{error}</div>}
        </div>
      </div>
      {stops?.map((stop, index) => (
        <Stop
          key={index}
          stop={stop}
          index={index}
          remove={() => removeStop(stop.id)}
          handleChange={handleChange}
        />
      ))}
      {addStopElem}
    </div>
  );
};

export default Stops;
