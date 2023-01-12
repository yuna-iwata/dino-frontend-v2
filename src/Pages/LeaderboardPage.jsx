import Leaderboard from "../Components/Leaderboard";
import Cover from "../Components/Coverphoto";
import React from "react";

export default function LeaderboardPage({ rowList }) {
  return (
    <div>
      <Cover />
      <Leaderboard />
    </div>
  );
}
