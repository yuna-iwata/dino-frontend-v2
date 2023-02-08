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

import { fetchPersonalLeaderBoard, getRank } from "../Networking";

export default function Account(props) {
  const {
    currentAvatar,
    currentUser,
    changeUser,
    changeProfileAvatar,
    cookies,
    removeCookie,
    light,
  } = props;

  const [scoreList, setScoreList] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [rank, setRank] = useState(0);
  const [currentTab, setCurrentTab] = useState("leaderboard");

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    fetchPersonalLeaderBoard(setScoreList, currentUser, setHighScore);
    getRank(currentUser, setRank);
  }, [currentUser]);

  function setColour() {
    if (light) {
      return "background.paper";
    } else {
      return "#2f2f2f";
    }
  }

  const tabs = {
    leaderboard: {
      text: "your leader board",
      page: (
        <PersonalLeaderBoard
          scoreList={scoreList}
          setScoreList={setScoreList}
          setColour={setColour}
        />
      ),
    },
    avatar: {
      text: "change avatar",
      page: (
        <AvatarSelection
          currentUser={currentUser}
          changeProfileAvatar={changeProfileAvatar}
          currentAvatar={currentAvatar}
          changeTab={changeTab}
          setColour={setColour}
        />
      ),
    },
    changeUsername: {
      text: "change username",
      page: (
        <ChangeUsername
          changeTab={changeTab}
          currentUser={currentUser}
          changeUser={changeUser}
          setColour={setColour}
        />
      ),
    },
    password: {
      text: "change password",
      page: (
        <ChangePassword
          changeTab={changeTab}
          currentUser={currentUser}
          setColour={setColour}
        />
      ),
    },
    signOut: {
      text: "sign out",
      page: (
        <LogOutConfirmation
          changeTab={changeTab}
          changeUser={changeUser}
          removeCookie={removeCookie}
          cookies={cookies}
          setColour={setColour}
        />
      ),
    },
    delete: {
      text: "delete account",
      page: (
        <DeleteAccountConfirmation
          currentUser={currentUser}
          changeUser={changeUser}
          changeTab={changeTab}
          removeCookie={removeCookie}
          setColour={setColour}
        />
      ),
    },
  };

  return (
    <Container>
      <AccountPageBanner
        highScore={highScore}
        rank={rank}
        currentAvatar={currentAvatar}
        currentUser={currentUser}
        setColour={setColour}
      />

      <Box
        display="flex"
        sx={{ width: "auto", height: "auto", mt: 3, ml: 5, flexGrow: 1 }}
        container
        spacing={1}
      >
        <Grid container sx={{ pt: 5, mr: 2 }}>
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
