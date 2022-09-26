import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Loader from "../resusables/Loader";
import BackButton from "../resusables/BackButton";

import routes from "../routes";
import AppProvider from "../context";

const App = () => {
  return (
    <AppProvider>
      <Suspense fallback={<Loader />}>
        <BackButton />
        <div className="container-fluid flex-center h-100 py-5">
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </div>
        <ToastContainer />
      </Suspense>
    </AppProvider>
  );
};

export default App;
