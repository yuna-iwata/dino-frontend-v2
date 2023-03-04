import { Link } from "react-router-dom";
import { Button, Box, Container, Typography } from "@mui/material";

import LoginForm from "../Components/LoginForm";

export default function CreateAccountPage(props) {
  const {
    changeUser,
    game,
    changeProfileAvatar,
    setCookie,
    savedScore,
    changeScore,
    setColour,
  } = props;

  if (game.key !== null) {
    game?.destroy(true);
  }

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        sx={{
          m: 10,
          flexDirection: "column",
          bgcolor: setColour,
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
        }}
      >
        <div>
          <Typography sx={{ fontSize: 35, fontWeight: 500, mb: 1 }}>
            Login
          </Typography>
          <LoginForm
            changeUser={changeUser}
            changeProfileAvatar={changeProfileAvatar}
            setCookie={setCookie}
            savedScore={savedScore}
            changeScore={changeScore}
          />
          <Typography sx={{ mb: 2 }}>Don't have an account?</Typography>
          <Link style={{ textDecoration: "none" }} to="/create-account">
            <Button variant="outlined" color="greenTheme">
              <Typography>Sign Up</Typography>
            </Button>
          </Link>
        </div>
      </Box>
    </Container>
  );
}
