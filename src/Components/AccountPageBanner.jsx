import { CardHeader, Avatar, Typography, Box, Grid } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";

import { itemData, bucketBaseUrl } from "../data";

export default function AccountPageBanner(props) {
  const { currentAvatar, currentUser, highScore, rank } = props;

  return (
    <Box display="flex" sx={{ width: "auto", height: 80, mt: 3, ml: 5, mb: 5 }}>
      <Grid container spacing={3}>
        <Grid alignItems="center" display="flex" item xs={6}>
          <CardHeader
            avatar={
              <Avatar
                alt="Dino profile"
                src={`${bucketBaseUrl}${itemData[currentAvatar]["img"]}`}
                style={{
                  border: "0.1px solid lightgray",
                }}
                sx={{ width: 80, height: 80 }}
              />
            }
          />
          <Typography variant="h4">{currentUser}</Typography>
        </Grid>

        <Grid alignItems="center" display="flex" item xs={2}>
          <EmojiEventsIcon />
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#64B981", fontWeight: "bold" }}
              variant="h5"
            >
              High Score
            </Typography>
            <Typography sx={{ color: "#64B981" }} variant="h6">
              {highScore}
            </Typography>
          </Box>
        </Grid>

        <Grid alignItems="center" display="flex" item xs={2}>
          <PublicIcon color="neutral" />
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{ color: "#64B981", fontWeight: "bold" }}
              variant="h5"
            >
              World Ranking
            </Typography>
            <Typography sx={{ color: "#64B981" }} variant="h6">
              #{rank}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
