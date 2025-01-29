// index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
