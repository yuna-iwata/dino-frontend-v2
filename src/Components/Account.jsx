import { useState, useEffect } from "react";
import { Box, Grid, Container, Stack } from "@mui/material";
import TabButton from "./TabButton";
import PersonalLeaderBoard from "./AccountPageSubPages/PersonalLeaderBoard";
import AvatarSelection from "./AccountPageSubPages/AvatarSelection";
import ChangeUsername from "./AccountPageSubPages/ChangeUsername";
import ChangePassword from "./AccountPageSubPages/ChangePassword";
import LogOutConfirmation from "./AccountPageSubPages/LogOutConfirmation";
import DeleteAccountConfirmation from "./AccountPageSubPages/DeleteAccountConfirmation";
import AccountPageBanner from "./AccountPageBanner";
import {
  fetchPersonalLeaderBoard,
  fetchGlobalLeaderBoard,
} from "../Networking";

export default function Account({
  currentAvatar,
  username,
  changeUser,
  changeProfileAvatar,
  itemData,
  baseUrl,
}) {
  const [scoreList, setScoreList] = useState([]);
  const [globalList, setGlobalList] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [rank, setRank] = useState(0);

  useEffect(() => {
    if (username) {
      fetchPersonalLeaderBoard(setScoreList, username, setHighScore);
    }

    fetchGlobalLeaderBoard(setGlobalList);
    const matchedUser = globalList.filter(
      (item) => item["name"] === username
    )[0];
    if (globalList.length > 0 && matchedUser) {
      const findRank = matchedUser["rank"];
      setRank(findRank);
    }
  }, [globalList, username]);

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };
  const tabs = {
    leaderboard: {
      text: "your leader board",
      page: <PersonalLeaderBoard username={username} scoreList={scoreList} />,
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

  return (
    <Container>
      <AccountPageBanner
        highScore={highScore}
        rank={rank}
        baseUrl={baseUrl}
        itemData={itemData}
        currentAvatar={currentAvatar}
        username={username}
      />

      <Box
        display="flex"
        sx={{ width: "auto", height: "auto", mt: 3, ml: 5, flexGrow: 1 }}
        container
        spacing={1}
      >
        <Grid container sx={{ pt: 5 }}>
          <Stack direction="column" spacing={2}>
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
          </Stack>
        </Grid>
        <Grid container>{tabs[currentTab].page}</Grid>
      </Box>
    </Container>
  );
}
