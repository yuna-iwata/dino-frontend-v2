import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

export default function PersonalLeaderBoard({ username }) {
  const [scoreList, setScoreList] = useState([]);
  const [byScoreClicked, setByScoreClicked] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(
        `http://127.0.0.1:5000/personal-leaderboard?user=${username}`
      );
      const scoredata = await apiResponse.json();
      setScoreList(scoredata);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onOrderByScoreClick = () => {
    const orderedByScore = scoreList.sort(
      ({ score: a }, { score: b }) => b - a
    );
    console.log(orderedByScore); //put here to get rid of assigned value but never used error
    setByScoreClicked(byScoreClicked + 1);
  };

  useEffect(() => {}, [byScoreClicked]);

  const onOrderByDateClick = () => {};

  return (
    <Grid container justifyContent="space-between">
      <h1>Personal Leader Board</h1>
      <div>
        <p>order by:</p>
        <button onClick={onOrderByDateClick}>date</button>
        <button onClick={onOrderByScoreClick}>high score</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          {scoreList !== undefined && scoreList.length > 0 ? (
            <TableBody>
              {scoreList.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.score}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    </Grid>
  );
}
