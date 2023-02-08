import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  Badge,
  Box,
  Grid,
} from "@mui/material";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

import { itemData, bucketBaseUrl } from "../data";
import { removeSession } from "../Networking";

export default function Header(props) {
  const {
    currentUser,
    changeUser,
    currentAvatar,
    cookies,
    removeCookie,
    light,
    setModeFunction,
  } = props;

  function setColour() {
    if (light) {
      return "white";
    } else {
      return "#3f7250";
    }
  }

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
                style={{ textDecoration: "none", color: setColour() }}
              >
                <Grid
                  alignItems="center"
                  container
                  direction="row"
                  placement="left-start"
                >
                  <Grid item>
                    <Avatar
                      alt="Dino profile"
                      src={`${bucketBaseUrl}${itemData[currentAvatar]["img"]}`}
                    />
                  </Grid>
                  <Grid item sx={{ mt: 1, ml: 1 }}>
                    <Typography variant="h5" color="whiteText">
                      {currentUser}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Box>
          ) : (
            <Box>
              <Typography
                placement="left-start"
                component="div"
                sx={{ flexGrow: 1, ml: 12 }}
              ></Typography>
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
                to="/game"
                style={{
                  textDecoration: "none",
                  color: setColour(),
                }}
              >
                <Typography variant="h1">Play Game</Typography>
              </Link>
            </div>
          </Typography>

          <Tooltip title="Mode" placement="right-start">
            <IconButton size="large" color="inherit">
              <Badge>
                {light ? (
                  <DarkModeIcon
                    color="header"
                    onClick={() => setModeFunction()}
                  />
                ) : (
                  <LightModeIcon
                    color="header"
                    onClick={() => setModeFunction()}
                  />
                )}
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Leaderboard" placement="right-start">
            <Link to="/leaderboard">
              <IconButton size="large" color="header">
                <Badge>
                  <LeaderboardRoundedIcon color="header" />
                </Badge>
              </IconButton>
            </Link>
          </Tooltip>

          {currentUser ? (
            <Tooltip title="Log out" placement="right-start">
              <Link to="/">
                <IconButton
                  size="large"
                  color="header"
                  onClick={() => {
                    changeUser("");
                    removeSession(cookies.user);
                    removeCookie("user");
                  }}
                  label="log in button"
                >
                  <Badge>
                    <LogoutIcon color="header" />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>
          ) : (
            <Tooltip title="Log In / Create Account" placement="right-start">
              <Link to="/login">
                <IconButton size="large" colour="header">
                  <Badge>
                    <LoginIcon color="header" />
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
