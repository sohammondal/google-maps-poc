import { createContext, useContext, useEffect, useState } from "react";

import { busRoutes } from "../mocks";
import { routesStore } from "../utils/routesStore";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context || {};
};

const AppProvider = (props) => {
  /* load data from localStorage or some Mock data */
  // const data = routesStore.routes.length ? routesStore.routes : busRoutes;

  const [routes, setRoutes] = useState([...routesStore.routes]);
  const addRoutes = (newRoutes) =>
    setRoutes((routes) => [...newRoutes, ...routes]);
  const addRoute = (route) => setRoutes((routes) => [route, ...routes]);
  const delRoute = (id) =>
    setRoutes((routes) => routes.filter((route) => route.id !== id));
  const editRoute = (route, index) =>
    setRoutes((routes) => [
      ...routes.splice(0, index),
      route,
      ...routes.splice(index + 1)
    ]);

  useEffect(() => {
    const updateRoutes = () => {
      routesStore.populate(routes);
    };

    window.addEventListener("beforeunload", updateRoutes);

    return () => {
      window.removeEventListener("beforeunload", updateRoutes);
    };
  }, [routes]);

  const value = { routes, addRoutes, addRoute, editRoute, delRoute };

  return <AppContext.Provider value={value} {...props} />;
};

export default AppProvider;
