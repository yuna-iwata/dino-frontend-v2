import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("App renders", () => {
  render(<App />);
});

// test("Header contains leaderboard button", () => {
//   render(<App />);
//   const leaderboardButton = screen.getByTestId("LeaderboardRoundedIcon");
//   fireEvent.click(leaderboardButton);
// });

// test("Header contains log in button", () => {
//   render(<App />);
//   const loginButton = screen.getByTestId("LoginIcon");
//   fireEvent.click(loginButton);
// });

// test("game page has send score button", () => {
//   render(<App />);
//   const submitScoreButton = screen.getByRole("button", "button", {
//     name: /send score to leaderboard/i,
//   });
//   fireEvent.click(submitScoreButton);
// });
