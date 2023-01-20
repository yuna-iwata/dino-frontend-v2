import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WelcomePage from "../Pages/WelcomePage";
import Game from "../scenes/DinoGameScene";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

let game = null;
jest.mock("../scenes/DinoGameScene");

beforeEach(() => {
  Game.mockClear();
  game = new Game();
  game.destroy = jest.fn(() => undefined);
  game.key = 1;
});

test("Welcome page contains create account button", () => {
  render(<WelcomePage game={game} />, { wrapper: MemoryRouter });
  const createAccountButton = screen.getByRole("button", {
    name: /Create Account/i,
  });
  expect(createAccountButton).toBeInTheDocument();
});

test("Welcome page contains log in button", () => {
  render(<WelcomePage game={game} />, { wrapper: MemoryRouter });
  const logInButton = screen.getByRole("button", {
    name: /Log in/i,
  });
  expect(logInButton).toBeInTheDocument();
});

test("Welcome page contains continue as guest button", () => {
  render(<WelcomePage game={game} />, { wrapper: MemoryRouter });
  const guestButton = screen.getByRole("button", {
    name: /Continue as guest/i,
  });
  expect(guestButton).toBeInTheDocument();
});
