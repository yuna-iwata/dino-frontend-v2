import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccountPage from "../Pages/accountPage";
import Game from "../scenes/DinoGameScene";
import { MemoryRouter } from "react-router-dom";

let game = null;
jest.mock("../scenes/DinoGameScene");

beforeEach(() => {
  Game.mockClear();
  game = new Game();
  game.destroy = jest.fn(() => undefined);
  game.key = 1;
});

const itemData = [{ img: "" }];
const currentAvatar = 0;
const baseUrl = "../../public/dino-idle.png";
const username = "Louis";

test("Account page contains profile picture", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const profileIcon = screen.getByAltText(/dino profile/i);
  expect(profileIcon).toBeInTheDocument();
});

test("Account page contains high score text", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const highScoreText = screen.getByText(/High score/i);
  expect(highScoreText).toBeInTheDocument();
});

test("Account page contains world ranking text", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const worldRankingText = screen.getByText(/World Ranking/i);
  expect(worldRankingText).toBeInTheDocument();
});

test("Account page contains personal leader board button", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const personalLeaderBoardButton = screen.getByRole("button", {
    name: /your leader board/i,
  });
  expect(personalLeaderBoardButton).toBeInTheDocument();
});

test("Account page contains change avatar button", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const changeAvatarButton = screen.getByRole("button", {
    name: /change avatar/i,
  });
  expect(changeAvatarButton).toBeInTheDocument();
});

test("Account page contains change username button", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const changeUsernameButton = screen.getByRole("button", {
    name: /change username/i,
  });
  expect(changeUsernameButton).toBeInTheDocument();
});

test("Account page contains change password button", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const changePasswordButton = screen.getByRole("button", {
    name: /change password/i,
  });
  expect(changePasswordButton).toBeInTheDocument();
});

test("Account page contains sign out button", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const signOutButton = screen.getByRole("button", {
    name: /sign out/i,
  });
  expect(signOutButton).toBeInTheDocument();
});

test("Account page contains delete account button", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const deleteAccountButton = screen.getByRole("button", {
    name: /delete account/i,
  });
  expect(deleteAccountButton).toBeInTheDocument();
});

test("Username is visible", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const usernameText = screen.getByText(/Louis/i);
  expect(usernameText).toBeInTheDocument();
});

test("Clicking on change avatar tab changes to correct tab", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const changeAvatarButton = screen.getByRole("button", {
    name: /change avatar/i,
  });
  fireEvent.click(changeAvatarButton);
  const selectAvatarHeading = screen.getByRole("heading", {
    name: /Select an avatar/i,
  });
  expect(selectAvatarHeading).toBeInTheDocument();
});

test("Clicking on change username tab changes to correct tab", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const changeUsernameButton = screen.getByRole("button", {
    name: /change username/i,
  });
  fireEvent.click(changeUsernameButton);
  const changeUsernameHeading = screen.getByRole("heading", {
    name: /Change username/i,
  });
  expect(changeUsernameHeading).toBeInTheDocument();
});

test("Clicking on change password tab changes to correct tab", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const changePasswordButton = screen.getByRole("button", {
    name: /change password/i,
  });
  fireEvent.click(changePasswordButton);
  const changePasswordHeading = screen.getByRole("heading", {
    name: /Change password/i,
  });
  expect(changePasswordHeading).toBeInTheDocument();
});

test("Clicking on sign out tab changes to correct tab", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const signOutButton = screen.getByRole("button", {
    name: /sign out/i,
  });
  fireEvent.click(signOutButton);
  const signOutConfirmationHeading = screen.getByRole("heading", {
    name: /Are you sure you want to log out/i,
  });
  expect(signOutConfirmationHeading).toBeInTheDocument();
});

test("Clicking on delete account tab changes to correct tab", () => {
  render(
    <AccountPage
      username={username}
      game={game}
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />,
    { wrapper: MemoryRouter }
  );
  const deleteAccountButton = screen.getByRole("button", {
    name: /delete account/i,
  });
  fireEvent.click(deleteAccountButton);
  const deleteAccountConfirmationHeading = screen.getByRole("heading", {
    name: /Are you sure you want to delete your account/i,
  });
  expect(deleteAccountConfirmationHeading).toBeInTheDocument();
});
