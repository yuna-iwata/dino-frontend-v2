import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginPage from "../Pages/CreateAccountPage";
import Game from "../scenes/DinoGameScene";
import { MemoryRouter } from "react-router-dom";

let game = null;
jest.mock("../scenes/DinoGameScene");
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  Game.mockClear();
  game = new Game();
  game.destroy = jest.fn(() => undefined);
  game.key = 1;
});

test("Login form contains at least one input field", () => {
  render(<LoginPage game={game} />, { wrapper: MemoryRouter });
  const input_field = screen.getByRole("textbox");
  expect(input_field).toBeInTheDocument();
});

test("Login form contains username field", () => {
  render(<LoginPage game={game} />, { wrapper: MemoryRouter });
  const username_field = screen.getByLabelText("Username");
  expect(username_field).toBeInTheDocument();
});

test("Login form contains password field", () => {
  render(<LoginPage game={game} />, { wrapper: MemoryRouter });
  const password_field = screen.getByLabelText("Password");
  expect(password_field).toBeInTheDocument();
});

test("Login page contains submit button", () => {
  render(<LoginPage game={game} />, { wrapper: MemoryRouter });
  const submit_button = screen.getByRole("button", { name: /submit/i });
  expect(submit_button).toBeInTheDocument();
});

test("Login page contains sign up button", () => {
  render(<LoginPage game={game} />, { wrapper: MemoryRouter });
  const submit_button = screen.getByRole("button", { name: /log in/i });
  expect(submit_button).toBeInTheDocument();
});
