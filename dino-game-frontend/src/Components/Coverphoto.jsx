import React from "react";
import Card from "@mui/material/Card";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import dinoBg from "/dinobg.jpg";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Cover() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#6c6c6c",
        contrastText: "#fff",
      },
    },
  });

  return (
    <Card sx={{ display: "flex", maxHeight: 100 }}>
      <Box sx={{ display: "flex", marginRight: 10, marginLeft: 5 }}>
        <ThemeProvider theme={theme}>
          <Button color="neutral">
            <ArrowBackIosNewIcon /> back
          </Button>
        </ThemeProvider>
      </Box>
      <img src={dinoBg} alt="dino-bg" />
    </Card>
  );
}
