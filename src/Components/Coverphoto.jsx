import React from "react";
import Card from "@mui/material/Card";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
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
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Card sx={{ display: "flex", maxHeight: 100, m: 5 }}>
        <img src="/dinobg.jpg" alt="dino-bg" />
      </Card>
    </Grid>
  );
}
