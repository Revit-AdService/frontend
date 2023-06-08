import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#242254",
    },
    secondary: {
      main: "#e1209e",
    },
    background: {
      paper: "#F9F9F9",
      default: "#F9F9F9",
    },
    backColor: {
      main: "#F9F9F9",
    },
    headerText: {
      main: "#215898",
    },
    cardColor: {
      main: "#E8E8E8",
    },
    heading1: {
      main: "#215898",
    },
    heading2: {
      main: "#E2209E",
    },
    post: {
      main: "#242254",
    },
    priceBtn: {
      main: "#FFFFFF",
    },
    orderBtn: {
      main: "#E1209E",
    },
    chatBtn: {
      main: "#242254",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",

    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: "27px",
      letterSpacing: -1.08,
    },

    title: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "18px",
      fontWeight: 500,
      letterSpacing: -1,
    },

    artistName: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "15px",
      fontStyle: "italic",
      letterSpacing: -0.83,
    },

    smallText: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "11px",
      fontStyle: "Italic",
      letterSpacing: -0.5,
    },

    // SignUp
    signUpLabel: {
      color: "#857a96",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "12px",
      letterSpacing: -0.36,
      marginLeft: 10,
    },
  },
});

export { LightTheme };
