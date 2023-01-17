import Leaderboard from "../Components/Leaderboard";
import Cover from "../Components/Coverphoto";
import React from "react";

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
      <Cover />
      <Leaderboard
        changeProfileAvatar={changeProfileAvatar}
        baseUrl={baseUrl}
        itemData={itemData}
      />
    </div>
  );
}
