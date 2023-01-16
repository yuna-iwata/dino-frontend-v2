import { Box, Typography } from "@mui/material";

export default function AvatarSelection() {
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
      <Typography>Select an avatar</Typography>;
    </Box>
  );
}
