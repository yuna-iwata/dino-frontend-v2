import Leaderboard from "../Components/leaderboard.jsx";
import Cover from "../Components/coverphoto.jsx";
import React from "react";

export default function LeaderboardPage({ rowList }) {
  return (
    <div>
      <Cover />
      <Leaderboard />
    </div>
  );
}
