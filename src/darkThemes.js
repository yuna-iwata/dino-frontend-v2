import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#18191A",
    },
    neutral: {
      main: "#64B981",
    },
    header: {
      main: "#3f7250",
    },
    greenTheme: {
      main: "#1E1E1E",
      contrastText: "#75d193",
    },
    darkerTheme: {
      main: "#64B981",
    },
    neutralTheme: {
      main: "#2F2F2F",
      contrastText: "#75d193",
    },
    whiteTheme: {
      main: "#fff",
      contrastText: "#fff",
    },
    buttonLeaderboard: {
      main: "#2F2F2F",
      contrastText: "black",
    },
    changeingText: "#75d193",
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

export { darkTheme };
