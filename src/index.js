import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./stores";
import { Provider } from "react-redux";
import './index.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >
);
