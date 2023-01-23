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
                <Grid
                  alignItems="center"
                  container
                  direction="row"
                  placement="left-start"
                >
                  <Grid item>
                    <Avatar
                      alt="Dino profile"
                      src={`${baseUrl}${itemData[currentAvatar]["img"]}`}
                    />
                  </Grid>
                  <Grid item sx={{ mt: 1, ml: 1 }}>
                    <Typography variant="h5">{currentUser}</Typography>
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
                <Typography variant="h1">Play Game</Typography>
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
