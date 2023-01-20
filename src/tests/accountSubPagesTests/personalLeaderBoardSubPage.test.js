import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PersonalLeaderBoard from "../../Components/AccountPageSubPages/PersonalLeaderBoard";

test("Personal Leaderboard subpage contains 'personal leaderboard' heading", () => {
  render(<PersonalLeaderBoard />);
  const personalLeaderBoardHeading = screen.getByRole("heading", {
    name: /personal leaderboard/i,
  });
  expect(personalLeaderBoardHeading).toBeInTheDocument();
});

test("Personal Leaderboard subpage contains 'order by' text", () => {
  render(<PersonalLeaderBoard />);
  const orderByText = screen.getByText(/order by/i);
  expect(orderByText).toBeInTheDocument();
});

test("Personal Leaderboard subpage contains date button", () => {
  render(<PersonalLeaderBoard />);
  const dateButton = screen.getByRole("button", {
    name: /date/i,
  });
  expect(dateButton).toBeInTheDocument();
});

test("Personal Leaderboard subpage contains score button", () => {
  render(<PersonalLeaderBoard />);
  const scoreButton = screen.getByRole("button", {
    name: /score/i,
  });
  expect(scoreButton).toBeInTheDocument();
});

test("Personal Leaderboard subpage contains date heading", () => {
  render(<PersonalLeaderBoard />);
  const dateButton = screen.getByRole("heading", {
    name: /date/i,
  });
  expect(dateButton).toBeInTheDocument();
});

test("Personal Leaderboard subpage contains score heading", () => {
  render(<PersonalLeaderBoard />);
  const scoreButton = screen.getByRole("heading", {
    name: /score/i,
  });
  expect(scoreButton).toBeInTheDocument();
});
