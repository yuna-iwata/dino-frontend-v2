import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChangeUsername from "../../Components/AccountPageSubPages/ChangeUsername";

test("Change username form contains new username field", () => {
  render(<ChangeUsername />);
  const username_field = screen.getByLabelText(/new username/i);
  expect(username_field).toBeInTheDocument();
});

test("Change username form contains password field", () => {
  render(<ChangeUsername />);
  const password_field = screen.getByLabelText(/password/i);
  expect(password_field).toBeInTheDocument();
});

test("Change username page contains submit button", () => {
  render(<ChangeUsername />);
  const submit_button = screen.getByRole("button", { name: /submit/i });
  expect(submit_button).toBeInTheDocument();
});

test("Change username page contains change username title", () => {
  render(<ChangeUsername />);
  const changeUsernameHeading = screen.getByRole("heading", {
    name: /Change username/i,
  });
  expect(changeUsernameHeading).toBeInTheDocument();
});
