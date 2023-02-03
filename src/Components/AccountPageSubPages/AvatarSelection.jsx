import { Box, Typography, ImageList } from "@mui/material";
import AvatarSelectionElement from "./AvatarSelectionElement";
import { itemData } from "../../data";
import { useEffect } from "react";
import { getUnlockedAvatars } from "../../Networking";
import { useState } from "react";

export default function AvatarSelection(props) {
  const { currentUser, changeProfileAvatar, currentAvatar } = props;
  const [unlockedAvatars, setUnlockedAvatars] = useState(0);
  const [avatarList, setAvatarList] = useState();

  useEffect(() => {
    getUnlockedAvatars(currentUser, setUnlockedAvatars);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setAvatarList(itemData.slice(0, unlockedAvatars + 1));
  }, [unlockedAvatars]);

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
        {avatarList
          ? avatarList.map((item, index) => (
              <AvatarSelectionElement
                currentUser={currentUser}
                changeProfileAvatar={changeProfileAvatar}
                item={item}
                index={index}
                currentAvatar={currentAvatar}
                key={index}
              />
            ))
          : null}
      </ImageList>
    </Box>
  );
}
