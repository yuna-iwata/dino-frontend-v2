import App from "../App";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Game from "../scenes/DinoGameScene";
//import { Game } from "phaser";
import GamePage from "../Pages/GamePage";
import LeaderboardPage from "../Pages/LeaderboardPage";
jest.mock("../scenes/DinoGameScene");

beforeEach(() => {
  Game.mockClear();
  const game = new Game();
  game.destroy = jest.fn(() => undefined);
});

test("leaderboard button exists and contains link to correct page", () => {
  render(<App />);
  const LeaderboardButton = screen.getAllByRole("link");
  expect(LeaderboardButton[1].href).toContain("/leaderboard");
});

test("leaderboard page displays the text 'leaderboard'", () => {
  render(<LeaderboardPage />);
  const LeaderboardText = screen.getByText(/leaderboard/i);
  expect(LeaderboardText).toBeInTheDocument();
});

// test("send score to leaderboard button in gamepage", () => {
//   render(<GamePage game={<Game />} currentUser={null} setGame={null} />);
//   const LeaderboardButton = screen.getByRole("button", {
//     name: /send score to leaderboard/i,
//   });
//   expect(LeaderboardButton).toBeInTheDocument();
// });
