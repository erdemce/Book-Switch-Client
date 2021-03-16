import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';






ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>

      <App />

    </BrowserRouter>
    </Provider>,
   
  </React.StrictMode>,
  document.getElementById("root")
);
