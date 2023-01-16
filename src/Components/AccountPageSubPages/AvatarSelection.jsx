import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import { changeAvatar } from "../../Networking";

export default function AvatarSelection({ username, changeProfileAvatar }) {
  const avatarBaseUrl = "https://chrome-dino-game.s3.amazonaws.com/assets/";

  const itemData = [
    {
      id: 1,
      img: "dino-idle.png",
      title: "original dino",
    },
    {
      id: 2,
      img: "dino-baseball.png",
      title: "baseball dino",
    },
    {
      id: 3,
      img: "dino-disco.png",
      title: "disco dino",
    },
    {
      id: 4,
      img: "dino-mariachi.png",
      title: "mariachi dino",
    },
    {
      id: 5,
      img: "dino-rainbow.png",
      title: "rainbow dino",
    },
    {
      id: 6,
      img: "dino-sigma.png",
      title: "sigma dino",
    },
    {
      id: 7,
      img: "dino-spiderman.png",
      title: "spiderman dino",
    },
  ];

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
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <Tooltip title={item.title}>
              <IconButton
                style={{ borderRadius: 25 }}
                onClick={() => {
                  changeAvatar(item.id, username);
                  changeProfileAvatar(item.id);
                }}
              >
                <img
                  width="37px"
                  height="37px"
                  alt={item.title}
                  src={`${avatarBaseUrl}${item.img}`}
                />
              </IconButton>
            </Tooltip>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
