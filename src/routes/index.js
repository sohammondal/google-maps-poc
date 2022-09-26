import {
  Home,
  BusRoute,
  AddBusRoute,
  EditBusRoute,
  NotFound404
} from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/route/add",
    exact: true,
    component: AddBusRoute
  },
  {
    path: "/route/:routeId",
    exact: true,
    component: BusRoute
  },
  {
    path: "/route/:routeId/edit",
    exact: true,
    component: EditBusRoute
  },
  {
    path: "*",
    component: NotFound404
  }
];

export default routes;
