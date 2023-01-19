import CreateAccountForm from "../Components/CreateAccountForm";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function CreateAccountPage({
  changeUser,
  game,
  changeProfileAvatar,
}) {
  if (game.key !== null) {
    game?.destroy(true);
  }

  const theme = createTheme({
    palette: {
      green: {
        main: "#75d193",
        contrastText: "#fff",
      },
    },
  });

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
          <p className="avatar-title">Create account</p>
        </Typography>
        <CreateAccountForm
          changeUser={changeUser}
          changeProfileAvatar={changeProfileAvatar}
        />
        <Typography sx={{ mt: 2, mb: 2 }}>
          <p className="avatar-title">Already have an account?</p>
        </Typography>
        <ThemeProvider theme={theme}>
          <div>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button variant="outlined" color="green">
                <p className="avatar-button-welcome">log in</p>
              </Button>
            </Link>
          </div>
        </ThemeProvider>
      </Box>
    </Container>
  );
}
