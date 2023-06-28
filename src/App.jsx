import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUpAsClient from "./pages/SignUpAsClient";
import { LightTheme } from "./common/Theme/LightTheme";
import { DarkTheme } from "./common/Theme/DarkTheme";
// import ResetPassword from "./pages/ResetPassword";
import ResetPassword from "./layouts/ResetPassword";
import UserType from "./pages/UserType";
import SignUpAsServiceProvider from "./pages/SignUpAsServiceProvider";
import ServiceProviderProfile from "./layouts/ServiceProviderProfile";
import NotFound from "./error_pages/NotFound";
import ChangePasswordInput from "./components/ResetPassword/ChangePasswordInput";
import PasswordResetSuccessfully from "./components/ResetPassword/PasswordResetSuccessfully";
import EmailSent from "./components/ResetPassword/EmailSent";
import Landing from "./components/ServiceProviderProfile/Landing";
import Catalog from "./components/ServiceProviderProfile/Catalog";
import CreateCatalog from "./components/ServiceProviderProfile/CreateCatalog";
import CreatePost from "./components/ServiceProviderProfile/CreatePost";
import OrderDeals from "./components/ServiceProviderProfile/OrderDeals";
import PersonalInfo from "./components/ServiceProviderProfile/PersonalInfo";

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
            <Route path="/login" element={<Login check={theme} />} />

            <Route path="/reset-password" element={<ResetPassword />}>
              <Route index element={<ChangePasswordInput />} />
              <Route
                path="/reset-password/success"
                element={<PasswordResetSuccessfully />}
              />
              <Route
                path="/reset-password/email-sent"
                element={<EmailSent />}
              />
            </Route>

            <Route path="/signup-as" element={<UserType />} />

            <Route
              path="/signup-as-client"
              element={<SignUpAsClient check={theme} />}
            />
            <Route
              path="/signup-as-service-provider"
              element={<SignUpAsServiceProvider check={theme} />}
            />

            <Route path="/profile" element={<ServiceProviderProfile />}>
              <Route index element={<Landing />} />
              <Route path="/profile/catalog" element={<Catalog />} />
              <Route
                path="/profile/create-catalog"
                element={<CreateCatalog />}
              />
              <Route path="/profile/create-post" element={<CreatePost />} />

              <Route path="/profile/order-deals" element={<OrderDeals />} />

              <Route path="/profile/personal-info" element={<PersonalInfo />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
