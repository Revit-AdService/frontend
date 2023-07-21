import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import bgLight from "../assets/images/Login-SignUp/Login-side-image-Light.jpg";
import bgDark from "../assets/images/Login-SignUp/Login-side-image-Dark.jpg";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import MenuDrawer from "../utils/MenuDrawer";
import RevitLogo from "../assets/images/Logo.png";
import EmailSent from "../components/ResetPassword/EmailSent";
import ChangePasswordInput from "../components/ResetPassword/ChangePasswordInput";
import PasswordResetSuccessfully from "../components/ResetPassword/PasswordResetSuccessfully";

const ResetPassword = ({ check }) => {
  return (
    <Box
      sx={{
        "@media (max-width: 500px)": {
          background: `url(${check ? bgDark : bgLight})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-reapeat",
          backgroundPosition: "50%",
        },
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: "70px",
          pb: "25px",
        }}
      >
        <Box
          sx={{
            width: 688,
            height: 495,
            borderRadius: 15,
            backgroundColor: "SUCardBg.main",
            display: "flex",
            overflow: "hidden",

            "@media (max-width: 700px)": {
              width: 500,
            },
            "@media (max-width: 500px)": {
              width: 320,
            },

            "@media (min-width: 1536px)": {
              width: 1107,
              height: 695,
            },
          }}
        >
          <Box
            sx={{
              background: `url(${check ? bgDark : bgLight})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-reapeat",
              backgroundPosition: "55%",
              hieght: "100%",
              width: 364,
              "@media (max-width: 700px)": {
                width: "38%",
              },
              "@media (max-width: 500px)": {
                width: 0,
                backgroundPosition: "100%",
              },
              "@media (min-width: 1536px)": {
                width: 513,
              },
            }}
          />

          {/* <ChangePasswordInput /> */}
          {/* <PasswordResetSuccessfully /> */}
          {/* <EmailSent /> */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
