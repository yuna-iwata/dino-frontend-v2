import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Box,
  Typography,
} from "@mui/material";

import { fetchGlobalLeaderBoard } from "../Networking";
import { itemData, bucketBaseUrl } from "../data";

export default function Leaderboard() {
  const [globalList, setGlobalList] = useState([]);

  useEffect(() => {
    fetchGlobalLeaderBoard(setGlobalList);
  }, [globalList]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="10vh"
    >
      <TableContainer
        component={Paper}
        style={{ maxHeight: 600, maxWidth: "95%", overflow: "auto" }}
      >
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableBody>
            {globalList.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Typography>#{row.rank}</Typography>
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <Grid container direction="row" placement="left-start">
                    <Grid item>
                      <Avatar
                        alt="Dino profile"
                        src={`${bucketBaseUrl}${itemData[row.dinoId]["img"]}`}
                      />
                    </Grid>
                    <Grid item sx={{ mt: 1, ml: 1 }} data-testid="rowname">
                      <Typography variant="h5">{row.name}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="center">
                  <Typography>{row.score}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
