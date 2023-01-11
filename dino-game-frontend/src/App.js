import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "../Pages/GamePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello world</h1>
      <Routes>
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
