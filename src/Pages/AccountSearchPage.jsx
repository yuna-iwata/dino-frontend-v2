import { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

import PersonalLeaderBoard from "../Components/AccountPageSubPages/PersonalLeaderBoard";
import AccountPageBanner from "../Components/AccountPageBanner";

import {
  fetchPersonalLeaderBoard,
  getRank,
  checkUserExists,
  getUserAvatar,
} from "../Networking";

export default function AccountSearchPage(props) {
  const { game } = props;

  if (game.key !== null) {
    game?.destroy(true);
  }

  const [searchInput, setSearchInput] = useState("");
  const [currentSearchedUser, setCurrentSearchedUser] = useState(null);
  const [currentSearchedUserAvatar, setCurrentSearchedUserAvatar] = useState(0);
  const [scoreList, setScoreList] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [rank, setRank] = useState(0);

  useEffect(() => {
    getUserAvatar(currentSearchedUser, setCurrentSearchedUserAvatar);
    fetchPersonalLeaderBoard(setScoreList, currentSearchedUser, setHighScore);
    getRank(currentSearchedUser, setRank);
  }, [currentSearchedUser]);

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };
  const handleSearch = () => {
    checkUserExists(searchInput, setCurrentSearchedUser);
  };

  let results;
  if (currentSearchedUser === false) {
    results = (
      <p className="errorMessage">No user found. Search is case-sensitive</p>
    );
  } else if (!currentSearchedUser) {
    results = null;
  } else if (currentSearchedUser) {
    results = (
      <div>
        <AccountPageBanner
          highScore={highScore}
          rank={rank}
          currentAvatar={currentSearchedUserAvatar}
          currentUser={currentSearchedUser}
        />
        <PersonalLeaderBoard
          scoreList={scoreList}
          setScoreList={setScoreList}
        />
      </div>
    );
  }

  return (
    <Container>
      <Box
        display="flex"
        sx={{
          m: 10,
          p: 2,
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
        }}
      >
        <TextField
          id="outlined-search"
          label="Username"
          type="search"
          onChange={(event) => handleSearchChange(event.target.value)}
          color="greenTheme"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={() => handleSearch()}
          width="auto"
          color="greenTheme"
          sx={{ mb: 2 }}
        >
          <Typography>Search</Typography>
        </Button>
        {results}
      </Box>
    </Container>
  );
}
