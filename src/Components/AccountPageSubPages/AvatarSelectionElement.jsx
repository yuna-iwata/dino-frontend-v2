import { React } from "react";
import { ImageListItem, Tooltip, IconButton } from "@mui/material";
import { changeAvatar } from "../../Networking";

export default function AvatarSelectionElement({
  item,
  index,
  username,
  changeProfileAvatar,
  baseUrl,
  currentAvatar,
}) {
  let backgroundColour;
  if (currentAvatar === index) {
    backgroundColour = "#74D193";
  }

  return (
    <ImageListItem>
      <Tooltip title={item.title}>
        <IconButton
          style={{ borderRadius: 50, background: backgroundColour }}
          onClick={() => {
            changeAvatar(index, username);
            changeProfileAvatar(index);
          }}
        >
          <img
            width="100px"
            height="100px"
            alt={item.title}
            src={`${baseUrl}${item.img}`}
          />
        </IconButton>
      </Tooltip>
    </ImageListItem>
  );
}
