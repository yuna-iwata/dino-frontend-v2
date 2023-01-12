import { React, useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TabButton from "./TabButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardHeader } from "@mui/material";

import PersonalLeaderBoard from "./SubPagePersonalLeaderBoard";
import AvatarSelection from "./SubPageAvatarSelection";
import ChangeUsername from "./SubPageChangeUsername";
import ChangePassword from "./SubPageChangePassword";
import LogOutConfirmation from "./SubPageLogOutConfirmation";
import DeleteAccountConfirmation from "./SubPageDeleteAccountConfirmation";

export default function Account({ profile, username, score, rank, scoreList }) {
  const tabs = {
    leaderboard: {
      text: "your leader board",
      page: <PersonalLeaderBoard scoreList={scoreList} />,
    },
    avatar: { text: "change avatar", page: <AvatarSelection /> },
    username: { text: "change username", page: <ChangeUsername /> },
    password: { text: "change password", page: <ChangePassword /> },
    signOut: { text: "sign out", page: <LogOutConfirmation /> },
    delete: { text: "delete account", page: <DeleteAccountConfirmation /> },
  };
  const [currentTab, setCurrentTab] = useState({
    text: "leaderboard",
    page: <PersonalLeaderBoard scoreList={scoreList} />,
  });
  const changeTab = (tab) => {
    setCurrentTab(tabs[tab]);
  };
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#75d193",
        contrastText: "#fff",
      },
      green: {
        main: "#75d193",
        contrastText: "#fff",
      },
    },
  });

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
                  src={profile}
                  style={{
                    border: "0.1px solid lightgray",
                  }}
                  sx={{ width: 80, height: 80 }}
                />
              }
              title={username}
            />
          </Grid>

          <Grid alignItems="center" display="flex" item xs={2}>
            <EmojiEventsIcon />
            <Box sx={{ p: 2 }}>
              <Typography sx={{ color: "#75d193" }} variant="body1">
                High score
              </Typography>
              <Typography sx={{ color: "#75d193" }} variant="body2">
                {score}
              </Typography>
            </Box>
          </Grid>

          <Grid alignItems="center" display="flex" item xs={2}>
            <PublicIcon color="neutral" />
            <Box sx={{ p: 2 }}>
              <Typography sx={{ color: "#75d193" }} variant="body1">
                World ranking
              </Typography>
              <Typography sx={{ color: "#75d193" }} variant="body2">
                #{rank}
              </Typography>
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
        <Grid container justifyContent="space-between">
          <Stack direction="column" spacing={2}>
            <ThemeProvider theme={theme}>
              {Object.keys(tabs).map((tab, i) => {
                return (
                  <TabButton
                    tabs={tabs}
                    tab={tab}
                    currentTab={currentTab}
                    changeTab={changeTab}
                    key={i}
                  />
                );
              })}
            </ThemeProvider>
          </Stack>
        </Grid>
        {currentTab.page}
      </Box>
    </Container>
  );
}
