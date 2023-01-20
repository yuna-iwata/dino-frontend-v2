import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("Header contains leaderboard button", () => {
  render(<App />);
  const leaderboardButton = screen.getByLabelText(/leaderboard/i, {
    name: /leaderboard/i,
  });
  expect(leaderboardButton).toBeInTheDocument();
});

test("Header contains log in button", () => {
  render(<App />);
  const loginButton = screen.getByLabelText(/log in/i);
  expect(loginButton).toBeInTheDocument();
});
