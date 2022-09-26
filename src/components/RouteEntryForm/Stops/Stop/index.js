import React from "react";

const numberInputStep = (0.0).toFixed(14) + "1";

const Stop = ({ index, stop, remove, handleChange }) => {
  return (
    <div className="row mb-2">
      <div className="col">
        <small className="text-muted">Name</small>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          aria-label="Name"
          value={stop?.name}
          onChange={(e) => handleChange("name", e.target.value, index)}
          required
        />
      </div>
      <div className="col">
        <small className="text-muted">Latitude</small>
        <input
          type="number"
          className="form-control"
          placeholder="Latitude"
          aria-label="Latitude"
          value={stop?.lat}
          onChange={(e) => handleChange("lat", Number(e.target.value), index)}
          required
          step={numberInputStep}
        />
      </div>
      <div className="col">
        <small className="text-muted">Longitude</small>
        <input
          type="number"
          className="form-control"
          placeholder="Longitude"
          aria-label="Longitude"
          value={stop?.lng}
          onChange={(e) => handleChange("lng", Number(e.target.value), index)}
          required
          step={numberInputStep}
        />
      </div>
      <div className="col-1 d-flex align-items-center mt-4">
        <i className="bi bi-x-circle remove-stoppage-btn" onClick={remove} />
      </div>
    </div>
  );
};

export default Stop;
