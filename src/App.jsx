import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUpAsClient from "./pages/SignUpAsClient";
import { LightTheme } from "./common/Theme/LightTheme";
import { DarkTheme } from "./common/Theme/DarkTheme";
import ResetPassword from "./pages/ResetPassword";
import UserType from "./pages/UserType";
import SignUpAsServiceProvider from "./pages/SignUpAsServiceProvider";
import ServiceProviderProfile from "./pages/ServiceProviderProfile";

function App() {
  const [theme, setTheme] = useState(false);

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
            <Route path="login" element={<Login check={theme} />} />
            <Route
              path="resetpassword"
              element={<ResetPassword check={theme} />}
            />
            <Route path="signup-as" element={<UserType />} />
            <Route
              path="signup-as-client"
              element={<SignUpAsClient check={theme} />}
            />
            <Route
              path="signup-as-service-provider"
              element={<SignUpAsServiceProvider check={theme} />}
            />
            <Route path="profile" element={<ServiceProviderProfile />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
