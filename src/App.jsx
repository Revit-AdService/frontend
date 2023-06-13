import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { LightTheme } from "./common/Theme/LightTheme";
import { DarkTheme } from "./common/Theme/DarkTheme";
import ResetPassword from "./pages/ResetPassword";
import UserType from "./pages/UserType";

function App() {
  const [theme, setTheme] = useState(true);

  const handleToggle = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Paper elevation={0}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Home check={theme} change={handleToggle} />}
            />
            <Route path="login" element={<Login />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="usertype" element={<UserType />} />
            <Route path="signup" element={<SignUp check={theme} />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
