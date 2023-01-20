import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeleteAccountConfirmation from "../../Components/AccountPageSubPages/DeleteAccountConfirmation";
import { MemoryRouter } from "react-router-dom";

test("Delete account page contains yes button", () => {
  render(<DeleteAccountConfirmation />, { wrapper: MemoryRouter });
  const yesButton = screen.queryByRole("button", { name: /yes/i });
  expect(yesButton).toBeInTheDocument();
});

test("Delete account page contains no button", () => {
  render(<DeleteAccountConfirmation />, { wrapper: MemoryRouter });
  const noButton = screen.queryByRole("button", { name: /no/i });
  expect(noButton).toBeInTheDocument();
});

test("Delete account page contains confirmation message", () => {
  render(<DeleteAccountConfirmation />, { wrapper: MemoryRouter });
  const confirmationText = screen.queryByRole("heading", {
    name: /Are you sure you want to delete your account/i,
  });
  expect(confirmationText).toBeInTheDocument();
});
