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
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { currentUser, changeUser, currentAvatar, baseUrl, itemData } = props;

  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        bgcolor: "#74D193",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {currentUser ? (
            <Box>
              <Link
                to="/account-page"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Grid container direction="row" placement="left-start">
                  <Grid item>
                    <Avatar
                      alt="Dino profile"
                      src={`${baseUrl}${itemData[currentAvatar]["img"]}`}
                    />
                  </Grid>
                  <Grid className="avatar-title" item sx={{ mt: 1, ml: 1 }}>
                    {currentUser}
                  </Grid>
                </Grid>
              </Link>
            </Box>
          ) : (
            <Box>
              <Typography
                placement="left-start"
                component="div"
                sx={{ flexGrow: 1, color: "white", ml: 12 }}
              >
                <p className="avatar-title">{""}</p>
              </Typography>
            </Box>
          )}
          <Typography
            variant="h3"
            component="div"
            fontFamily="IBM Plex Sans"
            sx={{ flexGrow: 1 }}
          >
            <div className="header-center">
              <Link
                className="avatar-title"
                to="/game"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Dino Game
              </Link>
            </div>
          </Typography>

          <Tooltip title="Leaderboard" placement="right-start">
            <Link to="/leaderboard">
              <IconButton size="large" color="inherit">
                <Badge sx={{ color: "white" }}>
                  <LeaderboardRoundedIcon />
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
                  label="log in button"
                >
                  <Badge sx={{ color: "white" }}>
                    <LogoutIcon />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>
          ) : (
            <Tooltip title="Log in" placement="right-start">
              <Link to="/login">
                <IconButton size="large" colour="inherit">
                  <Badge sx={{ color: "white" }}>
                    <LoginIcon />
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
