import { useEffect } from "react";
import DinoGameScene from "../scenes/DinoGameScene";
import Phaser from "phaser";
import { submitScore } from "../Networking";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GamePage({ game, setGame, currentUser }) {
  const navigate = useNavigate();
  const gameConfig = {
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    parent: "game",
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
      },
    },
    width: window.innerWidth,
    height: 300,
    scene: [DinoGameScene],
  };

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
    if (handlescore !== 0) {
      const response = await submitScore(handlescore, currentUser);
      console.log(response);
      navigate("/account-page");
      handlescore = 0;
    }
  };

  return (
    <div>
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
          <p className="avatar-button">send score to leaderboard</p>
        </Button>
      </Box>
    </div>
  );
}
