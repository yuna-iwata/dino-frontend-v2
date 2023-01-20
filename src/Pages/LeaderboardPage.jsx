import Leaderboard from "../Components/Leaderboard";
import React from "react";
import { Typography } from "@mui/material";

export default function LeaderboardPage({
  game,
  changeProfileAvatar,
  baseUrl,
  itemData,
}) {
  if (game.key !== null) {
    game?.destroy(true);
  }

  return (
    <div>
      <Typography variant="h2" align="center" sx={{ m: 3 }}>
        <p>Leaderboard</p>
      </Typography>
      <Leaderboard
        changeProfileAvatar={changeProfileAvatar}
        baseUrl={baseUrl}
        itemData={itemData}
      />
    </div>
  );
}
