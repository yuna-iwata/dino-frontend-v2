import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Phaser from "phaser";
import GamePage from "../Pages/GamePage";
import Leaderboard from "../Components/Leaderboard";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import "jest-canvas-mock";

jest.mock("../scenes/DinoGameScene");

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

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

test("send score to leaderboard button in gamepage", () => {
  render(<GamePage game={<Phaser.Game />} currentUser={null} setGame={null} />);
  //, {
  //   wrapper: MemoryRouter,
  // }
  // const LeaderboardButton = screen.getByRole("button", {
  //   name: /send score to leaderboard/i,
  // });
  // expect(LeaderboardButton).toBeInTheDocument();
});
