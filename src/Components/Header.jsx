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
import Box from "@mui/material/Box";
import { CardHeader } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { currentUser, changeUser, currentAvatar } = props;

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
            <Box>
              <Tooltip className="account-profile" placement="left-start">
                <Link to="/account-page" style={{ textDecoration: "none" }}>
                  <CardHeader
                    className="avatar-title"
                    avatar={<Avatar alt="Dino profile" src={currentAvatar} />}
                    title={currentUser}
                  />
                </Link>
              </Tooltip>
            </Box>
          ) : (
            <Box>
              <Typography
                placement="left-start"
                component="div"
                sx={{ flexGrow: 1, color: "#6c6c6c" }}
              >
                Hi, user!
              </Typography>
            </Box>
          )}
          <Typography
            className="avatar-title"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <div className="header-center">
              <Link
                to="/game"
                style={{ textDecoration: "none", color: "#74D193" }}
              >
                Dino game
              </Link>
            </div>
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

          {currentUser ? (
            <Tooltip title="Log out" placement="right-start">
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
            </Tooltip>
          ) : (
            <Tooltip title="Log in" placement="right-start">
              <Link to="/login">
                <IconButton size="large" colour="inherit">
                  <Badge color="primary">
                    <LoginIcon color="action" />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
