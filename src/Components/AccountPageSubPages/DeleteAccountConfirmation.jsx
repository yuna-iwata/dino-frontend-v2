import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { deleteUser } from "../../Networking.js";

export default function DeleteAccountConfirmation(props) {
  const { currentUser, changeUser, changeTab, removeCookie, setColour } = props;

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: setColour,
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        mt: 5,
      }}
    >
      <Typography variant="h3" align="center" sx={{ p: 2, color: "#74D193" }}>
        Are you sure you want to delete your account?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", p: 1, m: 1 }}>
        <Button
          variant="contained"
          color="greenTheme"
          onClick={() => {
            removeCookie("user");
            deleteUser(currentUser);
            changeUser("");
            navigate("/");
          }}
        >
          <Typography>Yes</Typography>
        </Button>
        <Button
          variant="contained"
          color="greenTheme"
          onClick={() => {
            changeTab("leaderboard");
          }}
        >
          <Typography>No</Typography>
        </Button>
      </Box>
    </Box>
  );
}
