import { Box, Typography } from "@mui/material";

export default function ChangeUsername() {
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
      <Typography>Fill in the below form to change your username</Typography>
    </Box>
  );
}
