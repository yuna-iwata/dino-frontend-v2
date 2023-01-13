import Cover from "../Components/Coverphoto";
import CreateAccountForm from "../Components/CreateAccountForm";
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
        <Typography sx={{ fontSize: 35, fontWeight: 500, mb: 1 }}>
          Create Account
        </Typography>
        <CreateAccountForm changeUser={changeUser} />
        <Typography sx={{ mt: 2, mb: 2 }}>Already have an account?</Typography>
        <ThemeProvider theme={theme}>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button variant="outlined" color="green">
              Log in
            </Button>
          </Link>
        </ThemeProvider>
      </Box>
    </Container>
  );
}
