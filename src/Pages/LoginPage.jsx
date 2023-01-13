import LoginForm from "../Components/LoginForm";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function CreateAccountPage(props) {
  const { changeUser } = props;
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
      <Box display="flex" sx={{ m: 10, flexDirection: "column" }}>
        <div>
          <Typography sx={{ fontSize: 35, fontWeight: 500, mb: 1 }}>
            Login
          </Typography>
          <LoginForm changeUser={changeUser} />
          <Typography sx={{ mb: 2 }}>Don't have an account?</Typography>
          <ThemeProvider theme={theme}>
            <Link style={{ textDecoration: "none" }} to="/create-account">
              <Button variant="outlined" color="green">
                Sign Up
              </Button>
            </Link>
          </ThemeProvider>
        </div>
      </Box>
    </Container>
  );
}
