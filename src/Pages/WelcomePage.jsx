import { Link } from "react-router-dom";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function WelcomePage(props) {
  const { game } = props;

  if (game.key !== null) {
    game?.destroy(true);
  }

  return (
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
      <Typography align="center" sx={{ mt: 3, fontSize: 25, color: "#74D193" }}>
        Welcome, click a button to continue
      </Typography>
      <Grid sx={{ m: 10 }}>
        <Stack direction="column" spacing={8} alignItems="center">
          <Link style={{ textDecoration: "none" }} to="/create-account">
            <Button
              variant="contained"
              color="greenTheme"
              startIcon={<PersonAddIcon />}
            >
              <Typography>Create Account</Typography>
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button
              variant="contained"
              color="greenTheme"
              startIcon={<LoginIcon />}
            >
              <Typography>Log In</Typography>
            </Button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/game">
            <Button
              variant="contained"
              color="greenTheme"
              startIcon={<PersonOutlineIcon />}
            >
              <Typography>Continue As Guest</Typography>
            </Button>
          </Link>
        </Stack>
      </Grid>
    </Box>
  );
}
