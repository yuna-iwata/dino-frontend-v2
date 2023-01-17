import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteUser } from "../../Networking.js";
import Button from "react-bootstrap/Button";

export default function DeleteAccountConfirmation(props) {
  const { username, changeUser, changeTab } = props;
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
          Are you sure you want to delete your account?
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", p: 1, m: 1 }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="flat"
              onClick={() => {
                deleteUser(username);
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
