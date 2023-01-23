import Leaderboard from "../Components/Leaderboard";
import React from "react";
import { Typography, Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LeaderboardPage({
  game,
  changeProfileAvatar,
  baseUrl,
  itemData,
}) {
  if (game.key != null) {
    game?.destroy(true);
  }

  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h2" align="center" sx={{ m: 3 }}>
        Leaderboard
      </Typography>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={() => navigate("/account-search")}
          variant="contained"
          color="greenTheme"
          align-horizontal="center"
        >
          <Typography>Search for an account</Typography>
        </Button>
      </CardActions>
      <Leaderboard
        changeProfileAvatar={changeProfileAvatar}
        baseUrl={baseUrl}
        itemData={itemData}
      />
    </div>
  );
}
