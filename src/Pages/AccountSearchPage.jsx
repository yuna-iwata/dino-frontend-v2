import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import PersonalLeaderBoard from "../Components/AccountPageSubPages/PersonalLeaderBoard";
import AccountPageBanner from "../Components/AccountPageBanner";
import {
  fetchPersonalLeaderBoard,
  fetchGlobalLeaderBoard,
  checkUserExists,
  getUserAvatar,
} from "../Networking";

export default function AccountSearchPage(props) {
  const { baseUrl, itemData, game } = props;
  if (game.key !== null) {
    game?.destroy(true);
  }

  const [searchInput, setSearchInput] = useState("");
  const [currentSearchedUser, setCurrentSearchedUser] = useState(null);
  const [currentSearchedUserAvatar, setCurrentSearchedUserAvatar] = useState(0);
  const [scoreList, setScoreList] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [rank, setRank] = useState(0);
  const [globalList, setGlobalList] = useState([]);

  useEffect(() => {
    if (currentSearchedUser) {
      fetchPersonalLeaderBoard(setScoreList, currentSearchedUser, setHighScore);
    }
    const matchedUser = globalList.filter(
      (item) => item["name"] === currentSearchedUser
    )[0];
    if (globalList.length > 0 && matchedUser) {
      const findRank = matchedUser["rank"];
      setRank(findRank);
    }
    getUserAvatar(currentSearchedUser, setCurrentSearchedUserAvatar);
    if (currentSearchedUser) {
      fetchGlobalLeaderBoard(setGlobalList);
      const matchedUser = globalList.filter(
        (item) => item["name"] === currentSearchedUser
      )[0];
      if (globalList.length > 0 && matchedUser) {
        const findRank = matchedUser["rank"];
        setRank(findRank);
      }
    }
  }, [globalList, currentSearchedUser]);

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };

  const handleSubmit = () => {
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
          baseUrl={baseUrl}
          itemData={itemData}
          currentAvatar={currentSearchedUserAvatar}
          username={currentSearchedUser}
        />
        <PersonalLeaderBoard
          username={currentSearchedUser}
          scoreList={scoreList}
        />
      </div>
    );
  }

  return (
    <div>
      <TextField
        id="outlined-search"
        label="Username"
        type="search"
        onChange={(event) => handleSearchChange(event.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      {results}
    </div>
  );
}
