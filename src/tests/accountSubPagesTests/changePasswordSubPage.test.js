import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChangePassword from "../../Components/AccountPageSubPages/ChangePassword";

test("Change password form contains new password field", () => {
  render(<ChangePassword />);
  const newPasswordField = screen.getByLabelText(/new password/i);
  expect(newPasswordField).toBeInTheDocument();
});

test("Change password form contains old password field", () => {
  render(<ChangePassword />);
  const oldPasswordField = screen.getByLabelText(/old password/i);
  expect(oldPasswordField).toBeInTheDocument();
});

test("Change password page contains submit button", () => {
  render(<ChangePassword />);
  const submit_button = screen.getByRole("button", { name: /submit/i });
  expect(submit_button).toBeInTheDocument();
});

test("Change password page contains change password title", () => {
  render(<ChangePassword />);
  const changePasswordHeading = screen.getByRole("heading", {
    name: /Change password/i,
  });
  expect(changePasswordHeading).toBeInTheDocument();
});
