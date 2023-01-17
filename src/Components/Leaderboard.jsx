import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { CardHeader } from "@mui/material";

export default function Leaderboard({ changeProfileAvatar }) {
  const rowList = [
    {
      rank: "1",
      name: "yuna",
      score: "9999",
      profile: "1",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableBody>
          {rowList.map((row) => (
            <TableRow
              key={row.rank}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.rank}
              </TableCell>
              <TableCell component="th" scope="row" align="left">
                <CardHeader
                  avatar={<Avatar alt="Dino profile" src={row.profile} />}
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
