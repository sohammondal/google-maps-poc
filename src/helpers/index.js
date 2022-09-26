import { v4 } from "uuid";
import { directionTypes, routeTypes, statusTypes } from "../constants";

export const generateUUID = () => v4();

export const getRandomValueFromArr = (arr = []) =>
  arr[Math.floor(Math.random() * arr.length)];

export const countDecimals = (num = 0.0) =>
  num?.toString()?.split(".")[1]?.length || 0;

export const isObjectEmpty = (obj) => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};

export const getExtraInfoFromRoute = (route = {}) => {
  const { direction, type, status, stops } = route;
  const isActive = status?.toLowerCase() === statusTypes.ACTIVE;
  const isGeneral = type?.toLowerCase() === routeTypes.GENERAL;
  const isDirectionUp = direction?.toLowerCase() === directionTypes.UP;
  const source = isDirectionUp ? stops[stops.length - 1] : stops[0];
  const destination = isDirectionUp ? stops[0] : stops[stops.length - 1];

  return {
    ...route,
    isActive,
    isGeneral,
    isDirectionUp,
    source,
    destination
  };
};
