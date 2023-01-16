import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";

export default function AvatarSelection() {
  const itemData = [
    {
      img: "/dino-idle.png",
      title: "original dino",
    },
    {
      img: "/dino-baseball.png",
      title: "baseball dino",
    },
    {
      img: "/dino-disco.png",
      title: "disco dino",
    },
    {
      img: "/dino-mariachi.png",
      title: "mariachi dino",
    },
    {
      img: "/dino-rainbow.png",
      title: "rainbow dino",
    },
    {
      img: "/dino-sigma.png",
      title: "sigma dino",
    },
    {
      img: "/dino-spiderman.png",
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
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item, id) => (
          <ImageListItem key={id}>
            <Tooltip title={item.title}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt={item.title}
                  src={`https://chrome-dino-game.s3.amazonaws.com/assets/${item.img}`}
                />
              </IconButton>
            </Tooltip>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
