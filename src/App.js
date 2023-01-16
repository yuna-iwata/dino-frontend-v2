import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

  // const navigate = useNavigate();

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
        {currentUser ? (
          <Route
            path="/create-account"
            element={<Navigate to="/account-page" replace={true} />}
          />
        ) : (
          <Route
            path="/create-account"
            element={<CreateAccountPage changeUser={changeUser} />}
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
            element={<LoginPage changeUser={changeUser} />}
          />
        )}
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        {currentUser ? (
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
