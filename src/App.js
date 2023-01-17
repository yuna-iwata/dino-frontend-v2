import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      img: "dino-idle.png",
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

  const changeProfileAvatar = (avatar) => {
    setCurrentAvatar(`${baseUrl}${itemData[avatar - 1]["img"]}`);
  };

  const rank = 12;

  return (
    <BrowserRouter>
      <Header
        currentUser={currentUser}
        currentAvatar={currentAvatar}
        changeUser={changeUser}
      />
      <Routes>
        <Route path="/" element={<WelcomePage game={game} />} />
        <Route
          path="/game"
          element={
            <GamePage game={game} setGame={setGame} currentUser={currentUser} />
          }
        />
        <Route
          path="/create-account"
          element={<CreateAccountPage changeUser={changeUser} game={game} />}
        />
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
        <Route
          path="/leaderboard"
          element={
            <LeaderboardPage
              game={game}
              changeProfileAvatar={changeProfileAvatar}
            />
          }
        />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
