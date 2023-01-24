import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
  Grid,
  Typography,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function PersonalLeaderBoard(props) {
  const { scoreList } = props;

  const [byScoreClicked, setByScoreClicked] = useState(0);

  const onOrderByScoreClick = () => {
    scoreList.sort(({ score: a }, { score: b }) => b - a);
    setByScoreClicked(byScoreClicked + 1);
  };
  const onOrderByDateClick = () => {
    scoreList.sort(({ date: a }, { date: b }) => new Date(b) - new Date(a));
    setByScoreClicked(byScoreClicked + 1);
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
          <Button variant="flat" onClick={onOrderByDateClick}>
            <Typography variant="h5">DATE</Typography>
          </Button>
          <Button variant="flat" onClick={onOrderByScoreClick}>
            <Typography variant="h5">SCORE</Typography>
          </Button>
        </ButtonGroup>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ mt: 2 }}
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
                    <Typography>{row.date}</Typography>
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
