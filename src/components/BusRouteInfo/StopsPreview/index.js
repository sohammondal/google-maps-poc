import React from "react";

const StopsPreview = ({ isDirectionUp, stops }) => {
  const buildStopsPreview = (stopsAcc, stop, index) => {
    const isLastStop = isDirectionUp ? index === 0 : index === stops.length - 1;

    stopsAcc.push(
      <React.Fragment key={stop.id}>
        {stop.name} {!isLastStop && <i className="bi bi-arrow-right"></i>}{" "}
      </React.Fragment>
    );

    return stopsAcc;
  };

  return isDirectionUp
    ? stops.reduceRight(buildStopsPreview, [])
    : stops.reduce(buildStopsPreview, []);
};

export default StopsPreview;
