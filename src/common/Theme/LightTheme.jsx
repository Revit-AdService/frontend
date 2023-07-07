import { createTheme } from "@mui/material";

const LightTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
      largeDesktop: 1536,
    },
  },

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
      main: "#242254",
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
    searchBg: {
      main: "#24225455",
    },

    // Signup & login
    SUCardBg: {
      main: "#e8e8e8dd",
    },
    signUpLabel: {
      main: "#857a96",
    },
    SUsign: {
      main: "#dc1f8a",
    },
    SUup: {
      main: "#200841",
    },
    SUInputTxt: {
      main: "#200841",
    },
    SUiconBg: {
      main: "#e8e8e8",
    },
    SignUpBtn: {
      main: "#dc1f8a",
    },
    SignUpBtnhover: {
      main: "#dc1f8aa0",
    },
    buttontxt: {
      main: "#857a96",
    },

    // User Type
    utTitle: {
      main: "#0e112b",
    },
    utCardBg: {
      main: "#e8e8e8",
    },
    utBtnBg: {
      main: "#fff",
    },

    // Reset Password
    rpTxtMsg: {
      main: "#857a96",
    },

    // Service Provider
    spNavBtnBg: {
      main: "#e6e6e5",
    },
    spHeading1: {
      main: "#242254",
    },
    spCardBg: {
      main: "#e6e6e5",
    },
    spText: {
      main: "#434254",
    },
    spQualificationsCardBg: {
      main: "#f9f9f9",
    },
    spDeleteBtn: {
      main: "#e2209e",
    },
    spProfilePicBorder: {
      main: "#e2209e",
    },
    spIconsColor: {
      main: "#dc1f8a",
    },
    spAddPostBtn: {
      bg: "#dc1f8a",
      color: "#e6e6e5",
    },
    spPostCardBg: {
      main: "#e2209e",
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
