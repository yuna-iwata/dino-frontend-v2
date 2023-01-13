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
  const changeUser = (username) => {
    setCurrentUser(username);
  };

  const profile =
    "https://chrome-dino-game.s3.amazonaws.com/assets/dino-idle.png";
  const rank = 12;
  const scoreList = [
    { score: 9999, date: "01/01/2023" },
    { score: 9999, date: "01/01/2023" },
    { score: 9999, date: "01/01/2023" },
  ];
  const score = scoreList[0].score;

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} changeUser={changeUser} />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route
          path="/create-account"
          element={<CreateAccountPage changeUser={changeUser} />}
        />
        <Route path="/login" element={<LoginPage changeUser={changeUser} />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route
          path="/account-page"
          element={
            <AccountPage
              profile={profile} // avatar
              username={currentUser}
              score={score} // the users current score
              rank={rank} // users rank
              scoreList={scoreList} // users list of scores
              changeUser={changeUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
