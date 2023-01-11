import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./Pages/GamePage.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
