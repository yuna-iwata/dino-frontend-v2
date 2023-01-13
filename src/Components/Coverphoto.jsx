import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export default function Cover() {
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
