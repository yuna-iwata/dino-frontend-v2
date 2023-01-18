import { useEffect } from "react";
import DinoGameScene from "../scenes/DinoGameScene";
import Phaser from "phaser";
import { submitScore } from "../Networking";
import { Typography, Button, Box } from "@mui/material";

export default function Gamepage({ game, setGame, currentUser }) {
  const gameConfig = {
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    parent: "game",
    physics: {
      default: "arcade",
      arcade: {
        debug: true,
      },
    },
    width: 1000,
    height: 300,
    scene: [DinoGameScene],
  };

  console.log(game.key);
  useEffect(() => {
    if (game.key == null) {
      const newGame = new Phaser.Game(gameConfig);
      setGame(newGame);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendClick = async () => {
    let scene = game.scene.keys.helloworld;
    let handlescore = scene.createScore();
    console.log(handlescore);
    let response = await submitScore(handlescore, currentUser);
    console.log(response);
  };

  return (
    <div>
      <Typography variant="h3" align="center" sx={{ p: 2, color: "#8e8d8d" }}>
        Game Page
      </Typography>
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
          onClick={handleSendClick}
        >
          send score to leaderboard
        </Button>
      </Box>
    </div>
  );
}
