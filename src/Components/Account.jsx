import { React, useState, useEffect } from "react";
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
import {
  fetchPersonalLeaderBoard,
  fetchGlobalLeaderBoard,
} from ".././Networking";

export default function Account({
  currentAvatar,
  username,
  changeUser,
  changeProfileAvatar,
  itemData,
  baseUrl,
}) {
  const [scoreList, setScoreList] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [rank, setRank] = useState(0);
  useEffect(() => {
    if (username) {
      fetchPersonalLeaderBoard(setScoreList, username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (scoreList.length > 0) {
      scoreList.sort(({ score: a }, { score: b }) => b - a);
      setHighScore(scoreList[0]["score"]);
    }
  }, [scoreList]);

  const [globalList, setGlobalList] = useState([]);

  useEffect(() => {
    fetchGlobalLeaderBoard(setGlobalList);
  }, []);
  useEffect(() => {
    const matchedUser = globalList.filter((item) => item["name"] === username);
    if (globalList.length > 0 && matchedUser > 0) {
      const findRank = matchedUser[0]["rank"];
      setRank(findRank);
      console.log(matchedUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalList]);

  console.log(globalList);

  const changeTab = (tab) => {
    setCurrentTab(tab);
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
          currentAvatar={currentAvatar}
          changeTab={changeTab}
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
  const initialTab = "leaderboard";
  const [currentTab, setCurrentTab] = useState(initialTab);
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
                  src={`${baseUrl}${itemData[currentAvatar]["img"]}`}
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
              <Typography
                sx={{ color: "#64B981", fontWeight: "bold" }}
                variant="body1"
              >
                <p className="avatar-score">High score</p>
              </Typography>
              <Typography sx={{ color: "#64B981" }} variant="body2">
                <p className="avatar-number">{highScore}</p>
              </Typography>
            </Box>
          </Grid>

          <Grid alignItems="center" display="flex" item xs={2}>
            <PublicIcon color="neutral" />
            <Box sx={{ p: 2 }}>
              <Typography
                sx={{ color: "#64B981", fontWeight: "bold" }}
                variant="body1"
              >
                <p className="avatar-score">World ranking</p>
              </Typography>
              <Typography sx={{ color: "#64B981" }} variant="body2">
                <p className="avatar-number">#{rank}</p>
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
        <Grid container sx={{ pt: 5 }}>
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
        <Grid container>{tabs[currentTab].page}</Grid>
      </Box>
    </Container>
  );
}
