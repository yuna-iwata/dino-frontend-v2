import { Link } from "react-router-dom";
import { Button, Box, Container, Typography } from "@mui/material";

import CreateAccountForm from "../Components/CreateAccountForm";

export default function CreateAccountPage(props) {
  const {
    changeUser,
    game,
    changeProfileAvatar,
    setCookie,
    savedScore,
    changeScore,
  } = props;

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
          setCookie={setCookie}
          savedScore={savedScore}
          changeScore={changeScore}
        />
        <Typography sx={{ mt: 2, mb: 2 }}>Already have an account?</Typography>
        <div>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button variant="outlined" color="greenTheme">
              <Typography>log in</Typography>
            </Button>
          </Link>
        </div>
      </Box>
    </Container>
  );
}
