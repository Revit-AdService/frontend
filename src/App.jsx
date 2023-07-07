import { CssBaseline, Paper, ThemeProvider } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { LightTheme } from "./common/Theme/LightTheme";
import { DarkTheme } from "./common/Theme/DarkTheme";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./common/NavBar";

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
          <NavBar check={theme} change={handleToggle} />
          <AppRoutes theme={theme} />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
