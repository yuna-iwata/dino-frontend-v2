import { useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";

export default function LogOutConfirmation({ changeTab, changeUser }) {
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
        Are you sure you want to log out?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", p: 1, m: 1 }}>
        <Button
          variant="contained"
          color="greenTheme"
          onClick={() => {
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
