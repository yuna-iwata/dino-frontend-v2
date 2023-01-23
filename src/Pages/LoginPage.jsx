import LoginForm from "../Components/LoginForm";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function CreateAccountPage({
  changeUser,
  game,
  changeProfileAvatar,
}) {
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
          bgcolor: "background.paper",
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
