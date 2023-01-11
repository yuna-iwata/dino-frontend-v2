import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./Pages/GamePage.js";
import LeaderboardPage from "../Pages/LeaderboardPage.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <Routes>
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
