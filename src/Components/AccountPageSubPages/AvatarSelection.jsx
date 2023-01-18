import { Box, Typography, ImageList } from "@mui/material";
import AvatarSelectionElement from "./AvatarSelectionElement";

export default function AvatarSelection({
  username,
  changeProfileAvatar,
  itemData,
  baseUrl,
  currentAvatar,
}) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 700,
      }}
    >
      <Typography variant="h4" align="center" sx={{ p: 2, color: "#74D193" }}>
        Select an avatar
      </Typography>
      <ImageList sx={{ width: 600, height: 600 }} cols={3} rowHeight={1.5}>
        {itemData.map((item, index) => (
          <AvatarSelectionElement
            username={username}
            changeProfileAvatar={changeProfileAvatar}
            item={item}
            index={index}
            baseUrl={baseUrl}
            currentAvatar={currentAvatar}
            key={index}
          />
        ))}
      </ImageList>
    </Box>
  );
}
