import { useEffect } from "react";
import Phaser from "phaser";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { submitScore } from "../Networking";
import { gameConfig } from "../data";

export default function Gamepage(props) {
  const { game, setGame, currentUser } = props;

  useEffect(() => {
    if (!game.key) {
      const newGame = new Phaser.Game(gameConfig);
      setGame(newGame);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleSendClick = async () => {
    let scene = game.scene.keys.helloworld;
    let handlescore = scene.createScore();
    if (handlescore !== 0) {
      await submitScore(handlescore, currentUser);
      navigate("/account-page");
      handlescore = 0;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        size="medium"
        variant="contained"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#8e8d8d",
        }}
        sx={{ m: 3 }}
        onClick={handleSendClick}
      >
        <Typography>send score to leaderboard</Typography>
      </Button>
    </Box>
  );
}
