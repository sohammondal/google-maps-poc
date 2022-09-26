import { generateUUID, getRandomValueFromArr } from "../helpers";

/****  Sample Data ****/

const directions = ["Up", "Down"];
const statuses = ["Active", "Inactive"];
const routeTypes = ["Ac", "General"];
const sampleStopCoords = [
  { lat: 22.584362607296985, lng: 88.42300240436731 },
  { lat: 22.578985888088184, lng: 88.4266686407642 },
  { lat: 22.577828516978702, lng: 88.42751960078678 },
  { lat: 22.57625624821755, lng: 88.43057773596892 },
  { lat: 22.574804786435458, lng: 88.43374560786869 }
];

// create sample routes
export const busRoutes = new Array(2).fill(null).map((_, index) => {
  return {
    id: `route-${generateUUID()}`,
    name: `Route ${index}`,
    direction: getRandomValueFromArr(directions),
    status: statuses[0],
    type: getRandomValueFromArr(routeTypes),
    stops: sampleStopCoords.map((sampleCoords, stopIndex) => ({
      id: `stop-${generateUUID()}`,
      name: `Sample Stop ${index}${stopIndex}`,
      ...sampleCoords
    }))
  };
});
