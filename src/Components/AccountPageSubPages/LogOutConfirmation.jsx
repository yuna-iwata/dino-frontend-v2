import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, Box } from "@mui/material";

export default function LogOutConfirmation() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
    >
      <Typography variant="h5" sx={{ color: "#74D193" }}>
        Are you sure you want to log out?
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button>Yes</Button>
      </Link>
      <Link to="/account-page" style={{ textDecoration: "none" }}>
        <Button>No</Button>
      </Link>
    </Box>
  );
}
