import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import GamePage from "../Pages/GamePage";
import Leaderboard from "../Components/Leaderboard";
import App from "../App";

test("test", () => {
  expect(true).toBe(true);
});

test("Dino Game link in header rendered", () => {
  render(<App />);
  const gamePageButton = screen.getByRole("link", {
    name: /Dino Game/i,
  });
  expect(gamePageButton).toBeInTheDocument();
});

test("send score to leaderboard button in gamepage", () => {
  render(<App />);
  const gamePageButton = screen.getByRole("link", {
    name: /Dino Game/i,
  });
  fireEvent.click(gamePageButton);
  const sendToLeaderBoardButton = screen.getByRole("button", {
    name: /send score to leaderboard/i,
  });
  expect(sendToLeaderBoardButton).toBeInTheDocument();
});
