import { Box, Typography, ImageList } from "@mui/material";
import AvatarSelectionElement from "./AvatarSelectionElement";
import { itemData } from "../../data";

export default function AvatarSelection(props) {
  const { currentUser, changeProfileAvatar, currentAvatar } = props;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 700,
        mt: 5,
      }}
      style={{ maxHeight: 465, overflow: "auto" }}
    >
      <Typography variant="h3" align="center" sx={{ p: 2, color: "#74D193" }}>
        Select An Avatar
      </Typography>
      <ImageList sx={{ width: 700, height: 400 }} cols={3} rowHeight={2}>
        {itemData.map((item, index) => (
          <AvatarSelectionElement
            currentUser={currentUser}
            changeProfileAvatar={changeProfileAvatar}
            item={item}
            index={index}
            currentAvatar={currentAvatar}
            key={index}
          />
        ))}
      </ImageList>
    </Box>
  );
}
