import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Grid,
  Typography,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function PersonalLeaderBoard(props) {
  const { scoreList, setScoreList, setColour } = props;

  const [currentCriterion, setCurrentCriterion] = useState("score");

  const orderBy = (sortCriterion) => {
    let sortedScoreList;
    if (sortCriterion === "date" && scoreList.length > 0) {
      if (currentCriterion === "score") {
        sortedScoreList = scoreList.sort(
          ({ date: a }, { date: b }) => new Date(b) - new Date(a)
        );
      } else if (currentCriterion === "date") {
        sortedScoreList = scoreList.reverse();
      }
    } else if (sortCriterion === "score" && scoreList.length > 0) {
      if (currentCriterion === "date") {
        sortedScoreList = scoreList.sort(({ score: a }, { score: b }) => b - a);
      } else {
        sortedScoreList = scoreList.reverse();
      }
    }
    setScoreList([...sortedScoreList]);
    setCurrentCriterion(sortCriterion);
  };

  return (
    <Grid container justifyContent="space-between">
      <Typography
        variant="h3"
        align="center"
        sx={{ mt: 5, color: "#74D193", mb: 0 }}
      >
        Personal Leaderboard
      </Typography>
      <Box sx={{ mb: 0 }}>
        <Typography sx={{ color: "#74D193", mt: 3 }} variant="h5">
          order by:
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color="buttonLeaderboard" onClick={() => orderBy("date")}>
            <Typography variant="h5">DATE</Typography>
          </Button>
          <Button color="buttonLeaderboard" onClick={() => orderBy("score")}>
            <Typography variant="h5">SCORE</Typography>
          </Button>
        </ButtonGroup>
      </Box>
      <TableContainer
        sx={{ mt: 2, bgcolor: setColour }}
        style={{ maxHeight: 410, overflow: "auto" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h5">Score</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">Date</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {scoreList && scoreList.length > 0 ? (
            <TableBody>
              {scoreList.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <Typography>{row.score}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h5">{row.date}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    </Grid>
  );
}
