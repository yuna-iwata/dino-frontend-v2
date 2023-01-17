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
  const changeUser = (username) => {
    setCurrentUser(username);
  };
  const profile =
    "https://chrome-dino-game.s3.amazonaws.com/assets/dino-idle.png";
  const rank = 12;

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} changeUser={changeUser} />
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
          element={<LoginPage changeUser={changeUser} game={game} />}
        />
        <Route path="/leaderboard" element={<LeaderboardPage game={game} />} />
        <Route
          path="/account-page"
          element={
            <AccountPage
              profile={profile} // avatar
              username={currentUser}
              rank={rank} // users rank
              changeUser={changeUser}
              game={game}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
