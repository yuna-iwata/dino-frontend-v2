import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./Pages/GamePage.js";
import CreateAccountPage from "./Pages/CreateAccountPage.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="create-account" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
