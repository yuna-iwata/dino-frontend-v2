import React from "react";
import { Typography, Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Leaderboard from "../Components/Leaderboard";

export default function LeaderboardPage(props) {
  const { game, changeProfileAvatar } = props;

  if (game.key !== null) {
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
      <Leaderboard changeProfileAvatar={changeProfileAvatar} />
    </div>
  );
}
