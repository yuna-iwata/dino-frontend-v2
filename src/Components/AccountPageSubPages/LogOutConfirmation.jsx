import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

export default function LogOutConfirmation({ changeTab, changeUser }) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        width: 400,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "#74D193" }}>
        Are you sure you want to log out?
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          onClick={() => {
            changeUser(null);
          }}
        >
          Yes
        </Button>
      </Link>
      <Button
        onClick={() => {
          changeTab("leaderboard");
        }}
      >
        No
      </Button>
    </Box>
  );
}
