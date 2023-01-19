import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Grid, Box } from "@mui/material";
import { fetchGlobalLeaderBoard } from "../Networking";
import { useState } from "react";

export default function Leaderboard({ baseUrl, itemData }) {
  const [globalList, setGlobalList] = useState([]);

  useEffect(() => {
    fetchGlobalLeaderBoard(setGlobalList);
  }, []);

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
                  <p className="avatar-score-leaderboard">#{row.rank}</p>
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <Grid container direction="row" placement="left-start">
                    <Grid item>
                      <Avatar
                        alt="Dino profile"
                        src={`${baseUrl}${itemData[row.dino_id]["img"]}`}
                      />
                    </Grid>
                    <Grid className="avatar-title" item sx={{ mt: 1, ml: 1 }}>
                      {row.name}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="center">
                  <p className="avatar-title">{row.score}</p>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
