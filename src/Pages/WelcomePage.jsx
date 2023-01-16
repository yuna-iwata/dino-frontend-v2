import Cover from "../Components/Coverphoto";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
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
        contrastText: "black",
      },
    },
  });
  return (
    <div className="container">
      <Cover />
      <Grid sx={{ m: 10 }}>
        <Stack direction="column" spacing={8} alignItems="center">
          <ThemeProvider theme={theme}>
            <Link style={{ textDecoration: "none" }} to="/create-account">
              <Button
                variant="contained"
                color="green"
                startIcon={<PersonAddIcon />}
              >
                Create Account
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button
                variant="contained"
                color="green"
                startIcon={<LoginIcon />}
              >
                Log In
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/game">
              <Button
                variant="contained"
                color="green"
                startIcon={<PersonOutlineIcon />}
              >
                Continue As Guest
              </Button>
            </Link>
          </ThemeProvider>
        </Stack>
      </Grid>
    </div>
  );
}
