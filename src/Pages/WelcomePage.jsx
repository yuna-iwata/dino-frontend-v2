import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export default function WelcomePage() {
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
      <img src="/dinobg.jpg" alt="dino-bg" />
      <div className="stack-container">
        <div className="welcome-page-container">
          <Stack direction="column" spacing={5} alignItems="center">
            <ThemeProvider theme={theme}>
              <Link style={{ textDecoration: "none" }} to="/create-account">
                <Button variant="contained" color="green">
                  Create Account
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button variant="contained" color="green">
                  Log In
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/game">
                <Button variant="contained" color="green">
                  Continue As Guest
                </Button>
              </Link>
            </ThemeProvider>
          </Stack>
        </div>
      </div>
    </div>
  );
}
