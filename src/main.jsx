// Entry point: mounts the React app, sets up Redux Provider and Router

import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.js";
import "./styles.css";

// Uses HashRouter to ensure routing works on both localhost and GitHub Pages
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Global store provider */}
    <Provider store={store}>
      {/* HashRouter ensures proper routing on refresh in GitHub Pages */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
