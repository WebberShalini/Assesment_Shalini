import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import store from "../redux/store";
import App1 from "../App1/App1";
import Dashboard from "../App1/components/Dashboard";

test('renders Dashboard and navigates to List route when "Go to List" is clicked', async () => {
  render(
    <Provider store={store}>
      <Router>
        <App1 />
      </Router>
    </Provider>
  );

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Go to List")).toBeInTheDocument();

  // Click the "Go to List" button
  fireEvent.click(screen.getByText("Go to List"));
});

const mockFavorites = [
  { id: 1, title: "Item 1", thumbnailUrl: "https://via.placeholder.com/150" },
  { id: 2, title: "Item 2", thumbnailUrl: "https://via.placeholder.com/150" },
];

const mockStore = {
  getState: () => ({
    favorites: mockFavorites,
  }),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

test("renders Favorites section correctly", () => {
  render(
    <Provider store={mockStore}>
      <Router>
        <Dashboard />
      </Router>
    </Provider>
  );

  expect(screen.getByText("Favorites")).toBeInTheDocument();
  expect(screen.getByText(/item 1/i)).toBeInTheDocument();
  expect(screen.getByText(/item 2/i)).toBeInTheDocument();
});
