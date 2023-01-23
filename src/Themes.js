import { createTheme } from "@mui/material/styles";

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
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.5rem" },
    h4: { fontSize: "1rem" },
    h5: { fontSize: "0.75rem" },
    h6: { fontSize: "0.6rem" },
  },
});

export { theme };
