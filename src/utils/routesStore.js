export const routesStore = (() => {
  const BUS_ROUTES = "BUS_ROUTES";

  let routes = JSON.parse(localStorage.getItem(BUS_ROUTES) || "{}");

  const all = (() => Object.values(routes))();

  const get = (id) => routes[id];

  const clear = () => {
    routes = {};
  };

  const save = () => {
    localStorage.clear(BUS_ROUTES);
    localStorage.setItem(BUS_ROUTES, JSON.stringify(routes));
  };

  const populate = (routesData = []) => {
    if (!Array.isArray(routesData))
      throw new Error("Data should be an array of routes");

    clear();

    routesData.forEach((route) => (routes[route.id] = route));

    save();

    return routes;
  };

  return Object.freeze({
    routes: all,
    get,
    populate
  });
})();
