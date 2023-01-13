import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
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
          ) : (
            <Typography
              placement="left-start"
              component="div"
              sx={{ flexGrow: 1, color: "#6c6c6c" }}
            >
              Hi, user!
            </Typography>
          )}

          <Typography
            variant="h5"
            component="div"
            align="justify"
            sx={{ flexGrow: 1 }}
          >
            <Link
              to="/game"
              style={{ textDecoration: "none", color: "#74D193" }}
            >
              Dino game
            </Link>
          </Typography>

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
                <IconButton size="large" colour="inherit">
                  <Badge color="primary">
                    <LoginIcon color="action" />
                  </Badge>
                </IconButton>
              </Link>
            )}
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
