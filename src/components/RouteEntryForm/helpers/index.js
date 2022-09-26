import { directionTypes, routeTypes, statusTypes } from "../../../constants";

const prepareDataCB = (val) => {
  let text = val.charAt(0).toUpperCase() + val.slice(1);
  return {
    text,
    value: text
  };
};

export const directionData = Object.values(directionTypes).map(prepareDataCB);
export const routeTypeData = Object.values(routeTypes).map(prepareDataCB);
export const statusData = Object.values(statusTypes).map(prepareDataCB);
