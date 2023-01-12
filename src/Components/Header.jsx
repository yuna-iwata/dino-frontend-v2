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
import { Link } from "react-router-dom";

export default function Header(props) {
  const { currentUser, changeUser } = props;
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
          {currentUser ? (
            <div className="account-link">
              <Tooltip title="Account profile" placement="left-start">
                <Link to="/account-page">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Dino profile" src="/dino-idle.png" />
                  </IconButton>
                </Link>
              </Tooltip>

              <Typography
                placement="left-start"
                component="div"
                sx={{ flexGrow: 1, color: "#6c6c6c" }}
              >
                {currentUser}
              </Typography>
            </div>
          ) : null}

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
            <Link to="/leaderboard">
              <IconButton size="large" color="inherit">
                <Badge color="primary">
                  <LeaderboardRoundedIcon color="action" />
                </Badge>
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Log out" placement="right-start">
            {currentUser ? (
              <Link to="/">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => changeUser(null)}
                >
                  <Badge color="primary">
                    <LogoutIcon color="action" />
                  </Badge>
                </IconButton>
              </Link>
            ) : (
              <Link to="/login">
                <button>Log In</button>
              </Link>
            )}
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
