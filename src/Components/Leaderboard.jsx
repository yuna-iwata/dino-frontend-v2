import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { CardHeader } from "@mui/material";
import { fetchGlobalLeaderBoard } from "../Networking";
import { useState } from "react";

export default function Leaderboard({ baseUrl, itemData }) {
  const [globalList, setGlobalList] = useState([]);

  useEffect(() => {
    fetchGlobalLeaderBoard(setGlobalList);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableBody>
          {globalList.map((row) => (
            <TableRow
              key={row.rank}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.rank}
              </TableCell>
              <TableCell component="th" scope="row" align="left">
                <CardHeader
                  avatar={
                    <Avatar
                      alt="Dino profile"
                      src={`${baseUrl}${itemData[row.dino_id - 1]["img"]}`}
                    />
                  }
                  title={row.name}
                />
              </TableCell>
              <TableCell align="center">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
