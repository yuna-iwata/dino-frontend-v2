import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
    header: {
      main: "#fff",
    },
    greenTheme: {
      main: "#75d193",
      contrastText: "#fff",
    },
    darkerTheme: {
      main: "#75d193",
      contrastText: "#fff",
    },
    neutralTheme: {
      main: "#f5f5f5",
      contrastText: "#75d193",
    },
    whiteTheme: {
      main: "#fff",
      contrastText: "#fff",
    },
    buttonLeaderboard: { main: "#F5F5F5", contrastText: "black" },
    changeingText: "black",
  },
  typography: {
    allVariants: {
      fontFamily: "",
    },
    greenTheme: { color: "#75d193" },
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.5rem" },
    h4: { fontSize: "1rem" },
    h5: { fontSize: "0.75rem" },
    h6: { fontSize: "0.6rem" },
  },
});

export { lightTheme };
