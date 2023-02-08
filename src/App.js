import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Game } from "phaser";
import { ThemeProvider } from "@mui/material";
import { useCookies } from "react-cookie";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./Components/Header";
import WelcomePage from "./Pages/WelcomePage";
import GamePage from "./Pages/GamePage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import AccountPage from "./Pages/AccountPage";
import AccountSearchPage from "./Pages/AccountSearchPage";

import "./App.css";
import { getSession } from "./Networking";
import { lightTheme } from "./lightThemes";
import { darkTheme } from "./darkThemes";

export default function App() {
  const [game, setGame] = useState(<Game />);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentAvatar, setCurrentAvatar] = useState(null);
  const [currentSearchedUser, setCurrentSearchedUser] = useState(null);
  const [savedScore, setSavedScore] = useState(0);

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [light, setLight] = useState(true);

  useEffect(() => {
    getSession(cookies.user, changeUser, setCurrentAvatar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeUser = (username) => {
    setCurrentUser(username);
  };
  const changeProfileAvatar = (avatarID) => {
    setCurrentAvatar(avatarID);
  };
  const changeSearchedUser = (username) => {
    setCurrentSearchedUser(username);
  };
  const changeScore = (newScore) => {
    setSavedScore(newScore);
  };

  const setModeFunction = () => {
    setLight((prev) => !prev);
  };

  const setColour = () => {
    console.log("hello");
    if (light) {
      return "background.paper";
    } else {
      return "#2F2F2F";
    }
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        <CssBaseline />
        <Header
          currentUser={currentUser}
          currentAvatar={currentAvatar}
          changeUser={changeUser}
          removeCookie={removeCookie}
          cookies={cookies}
          setModeFunction={setModeFunction}
          light={light}
        />
        <Routes>
          {currentUser ? (
            <Route
              path="/"
              element={<Navigate to="/account-page" replace={true} />}
            />
          ) : (
            <Route
              path="/"
              element={<WelcomePage game={game} setColour={setColour} />}
            />
          )}

          <Route
            path="/game"
            element={
              <GamePage
                game={game}
                setGame={setGame}
                currentUser={currentUser}
                changeScore={changeScore}
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
                  setCookie={setCookie}
                  savedScore={savedScore}
                  changeScore={changeScore}
                  setColour={setColour}
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
                  setCookie={setCookie}
                  savedScore={savedScore}
                  changeScore={changeScore}
                  setColour={setColour}
                />
              }
            />
          )}

          <Route
            path="/leaderboard"
            element={
              <LeaderboardPage
                game={game}
                changeSearchedUser={changeSearchedUser}
                setColour={setColour}
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
                  removeCookie={removeCookie}
                  cookies={cookies}
                  light={light}
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
            element={
              <AccountSearchPage
                game={game}
                changeSearchedUser={changeSearchedUser}
                currentSearchedUser={currentSearchedUser}
                setColour={setColour}
              />
            }
          />

          <Route path="*" element={<p>Error 404: Page Not Found</p>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

//#f5f5f5
