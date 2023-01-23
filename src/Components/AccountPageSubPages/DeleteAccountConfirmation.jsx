import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../Networking.js";

export default function DeleteAccountConfirmation(props) {
  const { username, changeUser, changeTab } = props;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        mt: 5,
      }}
    >
      <Typography variant="h3" align="center" sx={{ p: 2, color: "#74D193" }}>
        <p className="avatar-title">
          Are you sure you want to delete your account?
        </p>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", p: 1, m: 1 }}>
        <Button
          variant="contained"
          color="greenTheme"
          onClick={() => {
            deleteUser(username);
            changeUser(null);
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
