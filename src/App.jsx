import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import NavBar from "./components/Home/NavBar";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { LightTheme } from "./common/Theme/LightTheme";
import { DarkTheme } from "./common/Theme/DarkTheme";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Paper elevation={0}>
        <div className="App">
          {/* <NavBar check={theme} change={() => setTheme(!theme)} /> */}
          <Routes>
            <Route
              path="/"
              element={<Home check={theme} change={() => setTheme(!theme)} />}
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
