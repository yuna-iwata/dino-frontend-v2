import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import GamePage from "./Pages/GamePage.js";
import CreateAccountPage from "./Pages/CreateAccountPage.js";
import LoginPage from "./Pages/LoginPage";
import LeaderboardPage from "./Pages/LeaderboardPage.jsx";
import AccountPage from "./Pages/AccountPage.jsx";
import { useState } from "react";
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
      <Header />
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route
          path="/create-account"
          element={<CreateAccountPage changeUser={changeUser} />}
        />
        <Route path="/login" element={<LoginPage />} />
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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
