import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import NavBar from "./common/NavBar";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

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
      },

      title: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "20px",
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
    },
  });

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
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",

      h1: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
        fontSize: { xs: "20px", sm: "27px" },
      },

      title: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "17px",
        fontWeight: 500,
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
    },
  });

  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Paper elevation={0}>
        <div className="App">
          <NavBar check={theme} change={() => setTheme(!theme)} />
          <Home />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
