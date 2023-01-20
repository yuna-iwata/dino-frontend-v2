import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CreateAccountPage from "../Pages/CreateAccountPage";
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

test("Create account form contains three input fields", () => {
  render(<CreateAccountPage game={game} />, { wrapper: MemoryRouter });
  const input_field = screen.getByRole("textbox");
  expect(input_field).toBeInTheDocument();
});

test("Create account form contains username field", () => {
  render(<CreateAccountPage game={game} />, { wrapper: MemoryRouter });
  const username_field = screen.getByLabelText("Username");
  expect(username_field).toBeInTheDocument();
});

test("Create account form contains password field", () => {
  render(<CreateAccountPage game={game} />, { wrapper: MemoryRouter });
  const password_field = screen.getByLabelText("Password");
  expect(password_field).toBeInTheDocument();
});

test("Create account form contains confirm password field", () => {
  render(<CreateAccountPage game={game} />, { wrapper: MemoryRouter });
  const confirm_password_field = screen.getByLabelText("Confirm");
  expect(confirm_password_field).toBeInTheDocument();
});

test("Create account page contains submit button", () => {
  render(<CreateAccountPage game={game} />, { wrapper: MemoryRouter });
  const submit_button = screen.getByRole("button", { name: /submit/i });
  expect(submit_button).toBeInTheDocument();
});

test("Create account page contains login button", () => {
  render(<CreateAccountPage game={game} />, { wrapper: MemoryRouter });
  const submit_button = screen.getByRole("button", { name: /log in/i });
  expect(submit_button).toBeInTheDocument();
});
