import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Game } from "phaser";
import Header from "./Components/Header";
import WelcomePage from "./Pages/WelcomePage";
import GamePage from "./Pages/GamePage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import AccountPage from "./Pages/AccountPage";
import "./App.css";

function App() {
  const [game, setGame] = useState(<Game />);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentAvatar, setCurrentAvatar] = useState(null);

  const itemData = [
    {
      img: "dino-idle-formatted.png",
      title: "original dino",
    },
    {
      img: "dino-baseball.png",
      title: "baseball dino",
    },
    {
      img: "dino-disco.png",
      title: "disco dino",
    },
    {
      img: "dino-mariachi.png",
      title: "mariachi dino",
    },
    {
      img: "dino-rainbow.png",
      title: "rainbow dino",
    },
    {
      img: "dino-sigma.png",
      title: "sigma dino",
    },
    {
      img: "dino-spiderman.png",
      title: "spiderman dino",
    },
  ];

  const baseUrl = "https://chrome-dino-game.s3.amazonaws.com/assets/";

  const changeUser = (username) => {
    setCurrentUser(username);
  };

  const changeProfileAvatar = (avatarID) => {
    setCurrentAvatar(avatarID);
  };

  const rank = 12;

  return (
    <BrowserRouter>
      <Header
        currentUser={currentUser}
        currentAvatar={currentAvatar}
        changeUser={changeUser}
        itemData={itemData}
        baseUrl={baseUrl}
      />
      <Routes>
        <Route path="/" element={<WelcomePage game={game} />} />
        <Route
          path="/game"
          element={
            <GamePage game={game} setGame={setGame} currentUser={currentUser} />
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
            element={<CreateAccountPage changeUser={changeUser} game={game} />}
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
              baseUrl={baseUrl}
              itemData={itemData}
            />
          }
        />
        {currentUser ? (
          <Route
            path="/account-page"
            element={
              <AccountPage
                currentAvatar={currentAvatar} // avatar
                username={currentUser}
                rank={rank} // users rank
                changeUser={changeUser}
                changeProfileAvatar={changeProfileAvatar}
                itemData={itemData}
                baseUrl={baseUrl}
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
        <Route path="*" element={<p>Error 404: Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
