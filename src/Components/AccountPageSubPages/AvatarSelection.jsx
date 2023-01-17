import { Box, Typography } from "@mui/material";
import AvatarMap from "./AvatarMap";

export default function AvatarSelection({
  username,
  changeProfileAvatar,
  itemData,
  baseUrl,
}) {
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
      <Typography sx={{ p: 2, color: "#74D193" }}>Select an avatar</Typography>
      <AvatarMap
        username={username}
        changeProfileAvatar={changeProfileAvatar}
        itemData={itemData}
        baseUrl={baseUrl}
      />
    </Box>
  );
}
