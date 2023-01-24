import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Game } from "phaser";
import { ThemeProvider } from "@mui/material";

import Header from "./Components/Header";
import WelcomePage from "./Pages/WelcomePage";
import GamePage from "./Pages/GamePage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import AccountPage from "./Pages/AccountPage";
import AccountSearchPage from "./Pages/AccountSearchPage";

import "./App.css";
import { theme } from "./Themes";

export default function App() {
  const [game, setGame] = useState(<Game />);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentAvatar, setCurrentAvatar] = useState(null);

  const changeUser = (username) => {
    setCurrentUser(username);
  };
  const changeProfileAvatar = (avatarID) => {
    setCurrentAvatar(avatarID);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header
          currentUser={currentUser}
          currentAvatar={currentAvatar}
          changeUser={changeUser}
        />
        <Routes>
          {currentUser ? (
            <Route
              path="/"
              element={<Navigate to="/account-page" replace={true} />}
            />
          ) : (
            <Route path="/" element={<WelcomePage game={game} />} />
          )}

          <Route
            path="/game"
            element={
              <GamePage
                game={game}
                setGame={setGame}
                currentUser={currentUser}
              />
            }
          />

          {currentUser ? (
            <Route
              path="/create-account"
              element={<Navigate to="/account-page" replace={true} />}
            />
          ) : (
            <Route
              path="/create-account"
              element={
                <CreateAccountPage
                  changeUser={changeUser}
                  game={game}
                  changeProfileAvatar={changeProfileAvatar}
                />
              }
            />
          )}

          {currentUser ? (
            <Route
              path="/login"
              element={<Navigate to="/account-page" replace={true} />}
            />
          ) : (
            <Route
              path="/login"
              element={
                <LoginPage
                  changeUser={changeUser}
                  changeProfileAvatar={changeProfileAvatar}
                  game={game}
                />
              }
            />
          )}

          <Route
            path="/leaderboard"
            element={
              <LeaderboardPage
                game={game}
                changeProfileAvatar={changeProfileAvatar}
              />
            }
          />

          {currentUser ? (
            <Route
              path="/account-page"
              element={
                <AccountPage
                  currentAvatar={currentAvatar}
                  currentUser={currentUser}
                  changeUser={changeUser}
                  changeProfileAvatar={changeProfileAvatar}
                  game={game}
                />
              }
            />
          ) : (
            <Route
              path="/account-page"
              element={<Navigate to="/login" replace={true} />}
            />
          )}

          <Route
            path="/account-search"
            element={<AccountSearchPage game={game} />}
          />

          <Route path="*" element={<p>Error 404: Page Not Found</p>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
