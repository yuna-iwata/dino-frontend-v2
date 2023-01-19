import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function WelcomePage({ game }) {
  if (game.key !== null) {
    game?.destroy(true);
  }
  const theme = createTheme({
    palette: {
      green: {
        main: "#75d193",
        contrastText: "white",
      },
    },
  });

  return (
    <div className="container">
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
        <Typography
          align="center"
          sx={{ mt: 3, fontSize: 25, color: "#74D193" }}
        >
          <p>Welcome, click a button to continue</p>
        </Typography>
        <Grid sx={{ m: 10 }}>
          <Stack direction="column" spacing={8} alignItems="center">
            <ThemeProvider theme={theme}>
              <Link style={{ textDecoration: "none" }} to="/create-account">
                <Button
                  variant="contained"
                  color="green"
                  startIcon={<PersonAddIcon />}
                >
                  <p className="avatar-button">Create Account</p>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button
                  variant="contained"
                  color="green"
                  startIcon={<LoginIcon />}
                >
                  <p className="avatar-button">Log In</p>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/game">
                <Button
                  variant="contained"
                  color="green"
                  startIcon={<PersonOutlineIcon />}
                >
                  <p className="avatar-button">Continue As Guest</p>
                </Button>
              </Link>
            </ThemeProvider>
          </Stack>
        </Grid>
      </Box>
    </div>
  );
}
