import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import WelcomePage from "./Pages/WelcomePage";
import GamePage from "./Pages/GamePage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import AccountPage from "./Pages/AccountPage";
import "./App.css";

function App() {
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
  const scoreList = [
    { score: 9999, date: "01/01/2023" },
    { score: 9999, date: "01/01/2023" },
    { score: 9999, date: "01/01/2023" },
  ];
  const score = scoreList[0].score;

  return (
    <BrowserRouter>
      <Header
        currentUser={currentUser}
        currentAvatar={currentAvatar}
        changeUser={changeUser}
      />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route
          path="/create-account"
          element={<CreateAccountPage changeUser={changeUser} />}
        />
        <Route
          path="/login"
          element={
            <LoginPage
              changeUser={changeUser}
              changeProfileAvatar={changeProfileAvatar}
            />
          }
        />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route
          path="/account-page"
          element={
            <AccountPage
              currentAvatar={currentAvatar} // avatar
              username={currentUser}
              score={score} // the users current score
              rank={rank} // users rank
              scoreList={scoreList} // users list of scores
              changeUser={changeUser}
              changeProfileAvatar={changeProfileAvatar}
              itemData={itemData}
              baseUrl={baseUrl}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
