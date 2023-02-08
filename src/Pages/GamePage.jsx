import { useEffect, useState } from "react";
import Phaser from "phaser";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Grid } from "@mui/material";
import { GAME_OVER, NEW_GAME } from "../game/events";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { submitScore } from "../Networking";
import { gameConfig } from "../data";

export default function Gamepage(props) {
  const { game, setGame, currentUser, changeScore } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const addListeners = (game) => {
    game.events.on(GAME_OVER, (score, hatNum) => {
      setIsSubmitted(true);
      if (currentUser) {
        submitScore(score, currentUser, hatNum);
      } else {
        changeScore(score);
      }
    });
    game.events.on(NEW_GAME, () => {
      setIsSubmitted(false);
    });
  };

  useEffect(() => {
    if (game.key !== null) {
      game?.destroy(true);
    }
    let newGame;
    if (!game.key && currentUser !== null) {
      newGame = new Phaser.Game(gameConfig);
      setGame(newGame);
      addListeners(newGame);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <Box sx={{ ml: 2, mt: 2 }}>
        <Button
          color="greenTheme"
          variant="contained"
          onClick={() => window.location.reload(false)}
          sx={{ mb: 5 }}
        >
          <Typography variant="h6">Game not working? refresh page</Typography>
        </Button>
        <Grid>
          <Typography variant="h6" color="changeingText">
            Start/restart: <SpaceBarIcon />
          </Typography>
          <Typography variant="h6" color="changeingText">
            Jump: <SpaceBarIcon />
          </Typography>
          <Typography variant="h6" color="changeingText">
            Duck: <ArrowDownwardIcon />
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: "600px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isSubmitted ? (
              currentUser ? (
                <Typography variant="h6" color="#75d193">
                  Score Submitted to leaderboard
                </Typography>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    color="greenTheme"
                    variant="contained"
                    onClick={handleLoginClick}
                  >
                    <Typography variant="h6">Log In or Sign Up</Typography>
                  </Button>
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    to submit your score to the leaderboard
                  </Typography>
                </Box>
              )
            ) : null}
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
