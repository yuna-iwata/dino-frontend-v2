import React from "react";
import dino from "./dino-idle.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";
import { CardHeader } from "@mui/material";

export default function Account() {
  return (
    <Container>
      <Box
        display="flex"
        sx={{ width: "auto", height: 80, mt: 3, ml: 5, mb: 5 }}
      >
        <Grid container spacing={3}>
          <Grid alignItems="center" display="flex" item xs={6}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Dino profile"
                  src={dino}
                  style={{
                    border: "0.1px solid lightgray",
                  }}
                  sx={{ width: 80, height: 80 }}
                />
              }
              title="Username"
            />
          </Grid>

          <Grid alignItems="center" display="flex" item xs={2}>
            <EmojiEventsIcon />
            <Box sx={{ p: 2 }}>
              <Typography variant="body1">High score</Typography>
              <Typography variant="body2">9999</Typography>
            </Box>
          </Grid>

          <Grid alignItems="center" display="flex" item xs={2}>
            <PublicIcon />
            <Box sx={{ p: 2 }}>
              <Typography variant="body1">World ranking</Typography>
              <Typography variant="body2">#55</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        sx={{ width: "auto", height: "auto", mt: 3, ml: 5, flexGrow: 1 }}
        container
        spacing={1}
      >
        <Stack direction="column" spacing={2}>
          <Button variant="outlined" startIcon={<AccountCircleIcon />}>
            Change avatar
          </Button>
          <Button variant="outlined" startIcon={<PersonIcon />}>
            Change username
          </Button>
          <Button variant="outlined" startIcon={<KeyIcon />}>
            Change password
          </Button>
          <Button variant="outlined" startIcon={<LogoutIcon />}>
            Sign out
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete account
          </Button>
        </Stack>
        <Grid container justifyContent="space-between">
          ---- leaderboard ----
        </Grid>
      </Box>
    </Container>
  );
}
