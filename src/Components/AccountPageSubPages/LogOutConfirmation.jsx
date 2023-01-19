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
          mt: 5,
        }}
      >
        <Typography variant="h5" align="center" sx={{ p: 2, color: "#74D193" }}>
          <p className="avatar-title">Are you sure you want to log out?</p>
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
              <p className="avatar-title">Yes</p>
            </Button>
          </Link>
          <Button
            variant="flat"
            onClick={() => {
              changeTab("leaderboard");
            }}
          >
            <p className="avatar-title">No</p>
          </Button>
        </Box>
      </Box>
    </>
  );
}
