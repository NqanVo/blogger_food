import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { Provider } from "react-redux";

import axios from "axios";
import store from "./redux/store";
import Loading from "./components/Loading";

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <NotificationContainer />
      <Loading></Loading>
    </Provider>
  </BrowserRouter>
);
