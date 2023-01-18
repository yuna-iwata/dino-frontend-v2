import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Box, ButtonGroup, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPersonalLeaderBoard } from "../../Networking";

export default function PersonalLeaderBoard({ username }) {
  const [scoreList, setScoreList] = useState([]);
  const [byScoreClicked, setByScoreClicked] = useState(0);

  useEffect(() => {
    if (username) {
      fetchPersonalLeaderBoard(setScoreList, username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onOrderByScoreClick = () => {
    scoreList.sort(({ score: a }, { score: b }) => b - a);
    setByScoreClicked(byScoreClicked + 1);
  };
  const onOrderByDateClick = () => {
    scoreList.sort(({ date: a }, { date: b }) => new Date(b) - new Date(a));
    setByScoreClicked(byScoreClicked + 1);
  };

  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #75d193;
      color: white;
    }
    `}
      </style>
      <Grid container justifyContent="space-between">
        <Typography variant="h4" align="center" sx={{ color: "#74D193" }}>
          Personal leaderboard
        </Typography>
        <Box>
          <Typography sx={{ p: 1, color: "#74D193" }}>order by:</Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button variant="flat" onClick={onOrderByDateClick}>
              date
            </Button>
            <Button variant="flat" onClick={onOrderByScoreClick}>
              high score
            </Button>
          </ButtonGroup>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Score</TableCell>
                <TableCell align="center">Date</TableCell>
              </TableRow>
            </TableHead>
            {scoreList && scoreList.length > 0 ? (
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
    </>
  );
}
