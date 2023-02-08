import { Box, Typography, ImageList } from "@mui/material";
import { ImageListItem, Tooltip, Button } from "@mui/material";
import AvatarSelectionElement from "./AvatarSelectionElement";
import { itemData, lockedItemData } from "../../data";
import { useEffect } from "react";
import { getUnlockedAvatars } from "../../Networking";
import { useState } from "react";
import { bucketBaseUrl } from "../../data";

export default function AvatarSelection(props) {
  const { currentUser, changeProfileAvatar, currentAvatar } = props;
  const [unlockedAvatars, setUnlockedAvatars] = useState(0);
  const [avatarList, setAvatarList] = useState();
  const [lockedAvatarList, setLockedAvatarList] = useState();

  useEffect(() => {
    getUnlockedAvatars(currentUser, setUnlockedAvatars);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setAvatarList(itemData.slice(0, unlockedAvatars + 1));
    setLockedAvatarList(lockedItemData.slice(unlockedAvatars + 1));
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
        {lockedAvatarList
          ? lockedAvatarList.map((item, index) => {
              return (
                <ImageListItem>
                  <Tooltip title={item.title}>
                    <Button
                      sx={{
                        borderRadius: 50,
                      }}
                    >
                      <img
                        width="100px"
                        height="100px"
                        alt={item.title}
                        src={`${bucketBaseUrl}${item.img}`}
                      />
                    </Button>
                  </Tooltip>
                </ImageListItem>
              );
            })
          : null}
      </ImageList>
    </Box>
  );
}
