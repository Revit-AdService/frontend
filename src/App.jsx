import { CssBaseline, Paper, ThemeProvider } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { LightTheme } from "./theme/LightTheme";
import { DarkTheme } from "./theme/DarkTheme";
import AppRoutes from "./routes/AppRoutes";
import NavbarRoutes from "./routes/NavbarRoutes";

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
          <NavbarRoutes check={theme} change={handleToggle} />
          <AppRoutes theme={theme} />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
