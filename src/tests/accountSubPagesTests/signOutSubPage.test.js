import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LogOutConfirmation from "../../Components/AccountPageSubPages/LogOutConfirmation";
import { MemoryRouter } from "react-router-dom";

test("Delete account page contains yes button", () => {
  render(<LogOutConfirmation />, { wrapper: MemoryRouter });
  const yesButton = screen.queryByRole("button", { name: /yes/i });
  expect(yesButton).toBeInTheDocument();
});

test("Delete account page contains no button", () => {
  render(<LogOutConfirmation />, { wrapper: MemoryRouter });
  const noButton = screen.queryByRole("button", { name: /no/i });
  expect(noButton).toBeInTheDocument();
});

test("Delete account page contains confirmation message", () => {
  render(<LogOutConfirmation />, { wrapper: MemoryRouter });
  const confirmationText = screen.queryByRole("heading", {
    name: /Are you sure you want to log out/i,
  });
  expect(confirmationText).toBeInTheDocument();
});
