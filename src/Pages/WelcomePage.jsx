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
    typography: {
      allVariants: {
        fontFamily: "",
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
        <ThemeProvider theme={theme}>
          <Typography
            align="center"
            sx={{ mt: 3, fontSize: 25, color: "#74D193" }}
          >
            Welcome, click a button to continue
          </Typography>
          <Grid sx={{ m: 10 }}>
            <Stack direction="column" spacing={8} alignItems="center">
              <Link style={{ textDecoration: "none" }} to="/create-account">
                <Button
                  variant="contained"
                  color="green"
                  startIcon={<PersonAddIcon />}
                >
                  <Typography>Create Account</Typography>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button
                  variant="contained"
                  color="green"
                  startIcon={<LoginIcon />}
                >
                  <Typography>Log In</Typography>
                </Button>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/game">
                <Button
                  variant="contained"
                  color="green"
                  startIcon={<PersonOutlineIcon />}
                >
                  <Typography>Continue As Guest</Typography>
                </Button>
              </Link>
            </Stack>
          </Grid>
        </ThemeProvider>
      </Box>
    </div>
  );
}
