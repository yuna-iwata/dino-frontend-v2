import React from "react";
// import dino from "./dino-idle.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardHeader } from "@mui/material";

export default function Account({ profile, username, score, rank, scoreList }) {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#75d193",
        contrastText: "#fff",
      },
    },
  });

  return (
    <Container>
      <Box
        display="flex"
        sx={{ width: "auto", height: 80, mt: 3, ml: 5, mb: 5 }}
      >
        <Grid container spacing={3}>
          <Grid alignItems="center" display="flex" item xs={6}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Dino profile"
                  src={profile}
                  style={{
                    border: "0.1px solid lightgray",
                  }}
                  sx={{ width: 80, height: 80 }}
                />
              }
              title={username}
            />
          </Grid>

          <Grid alignItems="center" display="flex" item xs={2}>
            <EmojiEventsIcon />
            <Box sx={{ p: 2 }}>
              <Typography sx={{ color: "#75d193" }} variant="body1">
                High score
              </Typography>
              <Typography sx={{ color: "#75d193" }} variant="body2">
                {score}
              </Typography>
            </Box>
          </Grid>

          <Grid alignItems="center" display="flex" item xs={2}>
            <PublicIcon color="neutral" />
            <Box sx={{ p: 2 }}>
              <Typography sx={{ color: "#75d193" }} variant="body1">
                World ranking
              </Typography>
              <Typography sx={{ color: "#75d193" }} variant="body2">
                #{rank}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        display="flex"
        sx={{ width: "auto", height: "auto", mt: 3, ml: 5, flexGrow: 1 }}
        container
        spacing={1}
      >
        <Grid container justifyContent="space-between">
          <Stack direction="column" spacing={2}>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                color="neutral"
                startIcon={<AccountCircleIcon />}
              >
                Change avatar
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                startIcon={<PersonIcon />}
              >
                Change username
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                startIcon={<KeyIcon />}
              >
                Change password
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                startIcon={<LogoutIcon />}
              >
                Sign out
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                startIcon={<DeleteIcon />}
              >
                Delete account
              </Button>
            </ThemeProvider>
          </Stack>
        </Grid>

        <Grid container justifyContent="space-between">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Score</TableCell>
                  <TableCell align="center">Date</TableCell>
                </TableRow>
              </TableHead>

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
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </Container>
  );
}
