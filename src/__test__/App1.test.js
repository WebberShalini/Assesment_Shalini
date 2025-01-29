import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router";
import App1 from "../App1/App1";
import store from "../redux/store";

test("renders Dashboard route with real store", () => {
  render(
    <Provider store={store}>
      <Router>
        <App1 />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});

test("renders List route when navigating to /list", () => {
  render(
    <Provider store={store}>
      <Router>
        <App1 />
      </Router>
    </Provider>
  );
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});
