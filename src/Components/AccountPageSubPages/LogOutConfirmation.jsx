import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Button from "react-bootstrap/Button";

export default function LogOutConfirmation({ changeTab, changeUser }) {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #75d193;
      color: white;
    }
    `}
      </style>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography variant="h4" align="center" sx={{ p: 2, color: "#74D193" }}>
          Are you sure you want to log out?
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", p: 1, m: 1 }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="flat"
              onClick={() => {
                changeUser(null);
              }}
            >
              Yes
            </Button>
          </Link>
          <Button
            variant="flat"
            onClick={() => {
              changeTab("leaderboard");
            }}
          >
            No
          </Button>
        </Box>
      </Box>
    </>
  );
}
