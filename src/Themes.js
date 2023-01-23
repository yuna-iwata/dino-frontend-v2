import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    greenTheme: {
      main: "#75d193",
      contrastText: "#fff",
    },
    neutralTheme: {
      main: "#75d193",
      contrastText: "#fff",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "",
    },
  },
});

export { theme };
