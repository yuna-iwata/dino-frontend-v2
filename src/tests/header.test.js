import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Components/Header";
import { MemoryRouter } from "react-router-dom";

const itemData = [{ img: "" }];
const currentAvatar = 0;
const baseUrl = "../../public/dino-idle.png";

test("Header contains leaderboard button", () => {
  render(
    <Header
      currentUser={null}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const leaderboardButton = screen.getByLabelText(/leaderboard/i, {
    name: /leaderboard/i,
  });
  expect(leaderboardButton).toBeInTheDocument();
});

test("Header contains log in button", () => {
  render(
    <Header
      currentUser={null}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const loginButton = screen.getByLabelText(/log in/i);
  expect(loginButton).toBeInTheDocument();
});

test("Header contains game", () => {
  render(
    <Header
      currentUser={null}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const gameLink = screen.getByRole("link", { name: /play game/i });
  expect(gameLink).toBeInTheDocument();
});

test("Guest sees no icon", () => {
  render(
    <Header
      currentUser={null}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const profileIcon = screen.queryByAltText(/dino profile/i);
  expect(profileIcon).toBeNull();
});

test("Logged in user sees icon", () => {
  render(
    <Header
      currentUser="Louis"
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const profileIcon = screen.queryByAltText(/dino profile/i);
  expect(profileIcon).toBeInTheDocument();
});

test("Logged in user sees their name", () => {
  render(
    <Header
      currentUser="Louis"
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const username = screen.queryByText(/Louis/i);
  expect(username).toBeInTheDocument();
});
