import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { grey } from "@mui/material/colors";

export default function Header() {
  const primary = grey[100];

  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        bgcolor: primary,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Account profile" placement="left-start">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Dino profile" src="/dino-idle.png" />
            </IconButton>
          </Tooltip>

          <Typography
            placement="left-start"
            component="div"
            sx={{ flexGrow: 1, color: "#6c6c6c" }}
          >
            Username
          </Typography>

          <Grid container placement="top">
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, color: "#6c6c6c" }}
            >
              Dino game
            </Typography>
          </Grid>

          <Tooltip title="Leaderboard" placement="right-start">
            <IconButton size="large" color="inherit">
              <Badge color="primary">
                <LeaderboardRoundedIcon color="action" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Log out" placement="right-start">
            <IconButton size="large" color="inherit">
              <Badge color="primary">
                <LogoutIcon color="action" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
