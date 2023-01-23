import { CardHeader, Avatar, Typography, Box, Grid } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";

export default function AccountPageBanner(props) {
  const { baseUrl, itemData, currentAvatar, username, highScore, rank } = props;
  return (
    <Box display="flex" sx={{ width: "auto", height: 80, mt: 3, ml: 5, mb: 5 }}>
      <Grid container spacing={3}>
        <Grid alignItems="center" display="flex" item xs={6}>
          <CardHeader
            className="avatar-title"
            avatar={
              <Avatar
                alt="Dino profile"
                src={`${baseUrl}${itemData[currentAvatar]["img"]}`}
                style={{
                  border: "0.1px solid lightgray",
                }}
                sx={{ width: 80, height: 80 }}
              />
            }
            title={username}
          />
        </Grid>

        <Grid alignItems="center" display="flex" item xs={2}>
          <EmojiEventsIcon />
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#64B981", fontWeight: "bold" }}
              variant="body1"
            >
              High Score
            </Typography>
            <Typography sx={{ color: "#64B981" }} variant="body2">
              {highScore}
            </Typography>
          </Box>
        </Grid>

        <Grid alignItems="center" display="flex" item xs={2}>
          <PublicIcon color="neutral" />
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#64B981", fontWeight: "bold" }}
              variant="body1"
            >
              World Ranking
            </Typography>
            <Typography sx={{ color: "#64B981" }} variant="body2">
              #{rank}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
