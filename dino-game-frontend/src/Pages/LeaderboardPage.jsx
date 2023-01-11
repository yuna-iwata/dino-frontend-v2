import Leaderboard from "../Components/Leaderboard.jsx";
import Cover from "../Components/Coverphoto.jsx";
import React from "react";

export default function LeaderboardPage({ rowList }) {
  return (
    <div>
      <Cover />
      <Leaderboard />
    </div>
  );
}
