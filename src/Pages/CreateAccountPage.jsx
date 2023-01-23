import CreateAccountForm from "../Components/CreateAccountForm";
import { Link } from "react-router-dom";
import { Button, Box, Container, Typography } from "@mui/material";

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
        <Typography sx={{ fontSize: 35, fontWeight: 500, mb: 1 }}>
          Create account
        </Typography>
        <CreateAccountForm
          changeUser={changeUser}
          changeProfileAvatar={changeProfileAvatar}
        />
        <Typography sx={{ mt: 2, mb: 2 }}>Already have an account?</Typography>
        <div>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button variant="outlined" color="greenTheme">
              <p className="avatar-button-welcome">log in</p>
            </Button>
          </Link>
        </div>
      </Box>
    </Container>
  );
}
