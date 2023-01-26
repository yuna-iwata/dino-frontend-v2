import { useEffect } from "react";
import Phaser from "phaser";
import { Button, Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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

  const handleSubmitClick = async () => {
    let scene = game.scene.keys.DinoGameScene;
    let handlescore = scene.createScore();
    if (handlescore !== 0) {
      await submitScore(handlescore, currentUser);
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
        {currentUser ? (
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
            onClick={handleSubmitClick}
          >
            <Typography>send score to leader board</Typography>
          </Button>
        ) : (
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
            onClick={() => navigate("/login")}
          >
            <Typography>
              sign in before playing to access leaderboard
            </Typography>
          </Button>
        )}
      </Box>
      <Box sx={{ ml: [2] }}>
        <Button
          color="greenTheme"
          variant="contained"
          onClick={() => window.location.reload(false)}
          sx={{ mb: 5 }}
        >
          <Typography variant="h6">Game not working? refresh page</Typography>
        </Button>
        <Grid>
          <Typography variant="h6">
            Start/restart: <SpaceBarIcon />
          </Typography>
          <Typography variant="h6">
            Jump: <SpaceBarIcon />
          </Typography>
          <Typography variant="h6">
            Duck: <ArrowDownwardIcon />
          </Typography>
        </Grid>
      </Box>
    </div>
  );
}
