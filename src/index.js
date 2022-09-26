import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./components";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
