import React from "react";
import { ImageList, ImageListItem, Tooltip, IconButton } from "@mui/material";
import { changeAvatar } from "../../Networking";

export default function AvatarMap({
  itemData,
  username,
  changeProfileAvatar,
  baseUrl,
}) {
  return (
    <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={1.5}>
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <Tooltip title={item.title}>
            <IconButton
              style={{ borderRadius: 25 }}
              onClick={() => {
                changeAvatar(index + 1, username);
                changeProfileAvatar(index + 1);
              }}
            >
              <img
                width="37px"
                height="37px"
                alt={item.title}
                src={`${baseUrl}${item.img}`}
              />
            </IconButton>
          </Tooltip>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
