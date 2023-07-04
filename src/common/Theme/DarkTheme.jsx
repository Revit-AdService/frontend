import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#215898",
    },
    secondary: {
      main: "#215898",
    },
    background: {
      paper: "#0e112b",
      default: "#0e112b",
    },
    backColor: {
      main: "#0E112B",
    },
    headerText: {
      main: "#242254",
    },
    cardColor: {
      main: "#191E48",
    },
    heading1: {
      main: "#73CEE2",
    },
    heading2: {
      main: "#242254",
    },
    post: {
      main: "#7574A2",
    },
    priceBtn: {
      main: "#242254",
    },
    orderBtn: {
      main: "#215898",
    },
    chatBtn: {
      main: "#215898",
    },
    searchBg: {
      main: "#73CEE255",
    },

    // Signup & login
    SUCardBg: {
      main: "#242153dd",
    },
    signUpLabel: {
      main: "#215898",
    },
    SUsign: {
      main: "#225a98",
    },
    SUup: {
      main: "#ccd1da",
    },
    SUInputTxt: {
      main: "#ccd1da",
    },
    SUiconBg: {
      main: "#ccd1da",
    },
    SignUpBtn: {
      main: "#225a98",
    },
    SignUpBtnhover: {
      main: "#225a98a0",
    },
    buttontxt: {
      main: "#e8e8e8",
    },

    // User Type
    utTitle: {
      main: "#e2209e",
    },
    utCardBg: {
      main: "#242254",
    },
    utBtnBg: {
      main: "#7574a2",
    },

    // Reset Password
    rpTxtMsg: {
      main: "#225a98",
    },

    // Service Provider
    spNavBtnBg: {
      main: "#242254",
    },
    spHeading1: {
      main: "#7574a2",
    },
    spCardBg: {
      main: "#242254",
    },
    spText: {
      main: "#7574a2",
    },
    spQualificationsCardBg: {
      main: "#312c72",
    },
    spDeleteBtn: {
      main: "#215898",
    },
    spProfilePicBorder: {
      main: "#215898",
    },
    spIconsColor: {
      main: "#215898",
    },
    spAddPostBtn: {
      bg: "#215898",
      color: "#f9f9f9",
    },
    spPostCardBg: {
      main: "#215898",
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
      color: "#225a98",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "12px",
      letterSpacing: -0.36,
      marginLeft: 10,
    },
  },
});

export { DarkTheme };
