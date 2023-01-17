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
        minWidth: 300,
      }}
    >
      <Typography sx={{ p: 2 }}>Select an avatar</Typography>
      <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={1.5}>
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
