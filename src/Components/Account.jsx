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

import PersonalLeaderBoard from "./AccountPageSubPages/PersonalLeaderBoard";
import AvatarSelection from "./AccountPageSubPages/AvatarSelection";
import ChangeUsername from "./AccountPageSubPages/ChangeUsername";
import ChangePassword from "./AccountPageSubPages/ChangePassword";
import LogOutConfirmation from "./AccountPageSubPages/LogOutConfirmation";
import DeleteAccountConfirmation from "./AccountPageSubPages/DeleteAccountConfirmation";

export default function Account({
  currentAvatar,
  username,
  score,
  rank,
  changeUser,
  changeProfileAvatar,
  itemData,
  baseUrl,
}) {
  const changeTab = (tab) => {
    setCurrentTab(tabs[tab]);
  };
  const tabs = {
    leaderboard: {
      text: "your leader board",
      page: <PersonalLeaderBoard username={username} />,
    },
    avatar: {
      text: "change avatar",
      page: (
        <AvatarSelection
          username={username}
          changeProfileAvatar={changeProfileAvatar}
          itemData={itemData}
          baseUrl={baseUrl}
        />
      ),
    },
    changeUsername: {
      text: "change username",
      page: (
        <ChangeUsername
          changeTab={changeTab}
          username={username}
          changeUser={changeUser}
        />
      ),
    },
    password: {
      text: "change password",
      page: <ChangePassword changeTab={changeTab} username={username} />,
    },
    signOut: {
      text: "sign out",
      page: (
        <LogOutConfirmation changeTab={changeTab} changeUser={changeUser} />
      ),
    },
    delete: {
      text: "delete account",
      page: (
        <DeleteAccountConfirmation
          username={username}
          changeUser={changeUser}
          changeTab={changeTab}
        />
      ),
    },
  };
  const initialTab = Object.keys(tabs)[0];
  const [currentTab, setCurrentTab] = useState({
    text: tabs[initialTab].text,
    page: (
      <PersonalLeaderBoard
        username={username}
        //scoreList={scoreList}
      />
    ),
  });
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
              className="avatar-title"
              avatar={
                <Avatar
                  alt="Dino profile"
                  src={currentAvatar}
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
        <Grid container justifyContent="space-between">
          {currentTab.page}
        </Grid>
      </Box>
    </Container>
  );
}
