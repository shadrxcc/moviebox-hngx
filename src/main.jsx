import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./RouteSwitch.jsx";
import SearchProvider from "./components/context/searchcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <RouteSwitch />
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>
);
