import { ImageListItem, Tooltip, Button } from "@mui/material";

import { changeAvatar } from "../../Networking";
import { bucketBaseUrl } from "../../data";

export default function AvatarSelectionElement(props) {
  const { item, index, currentUser, changeProfileAvatar, currentAvatar } =
    props;

  let selectedColour;
  let selectedVariant;
  if (currentAvatar === index) {
    selectedColour = "darkerTheme";
    selectedVariant = "contained";
  } else {
    selectedColour = "whiteTheme";
    selectedVariant = "text";
  }

  return (
    <ImageListItem>
      <Tooltip title={item.title}>
        <Button
          color={selectedColour}
          variant={selectedVariant}
          sx={{
            borderRadius: 50,
          }}
          onClick={() => {
            changeAvatar(index, currentUser);
            changeProfileAvatar(index);
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
}
