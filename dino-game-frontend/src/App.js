import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import GamePage from "./Pages/GamePage.js";
import CreateAccountPage from "./Pages/CreateAccountPage.js";
import LeaderboardPage from "./Pages/LeaderboardPage.jsx";
import AccountPage from "./Pages/AccountPage.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/account-page" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
