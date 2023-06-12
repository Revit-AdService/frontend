import { AppBar, Box, Button, Input, Toolbar, Typography } from "@mui/material";
import React from "react";
import icon from "../assets/images/Revit.svg";
import styled from "@emotion/styled";
import bgLight from "../assets/images/Login-SignUp/Login-side-image-Light.jpg";
import bgDark from "../assets/images/Login-SignUp/Login-side-image-Dark.jpg";
import Google from "../assets/images/Login-SignUp/Google-Logo.png";
import { Link } from "react-router-dom";
import MenuDrawer from "../common/Menu";
import RevitLogo from "../assets/images/Logo.png";

const ResetPassword = (check) => {
  return (
    <Box
      sx={{
        "@media (max-width: 500px)": {
          background: `url(${check ? bgDark : bgDark})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-reapeat",
          backgroundPosition: "50%",
        },
      }}
    >
      <AppBar
        sx={{
          bgcolor: "backColor.main",
        }}
        elevation={0}
      >
        <Toolbar>
          <Link to={"/"}>
            <img
              src={RevitLogo}
              style={{ width: "100%", cursor: "pointer" }}
              alt="revit-logo"
            />
          </Link>
          <Typography flexGrow={1} />
          <MenuDrawer />
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            mt: 5,
            mb: 5,

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

          <Box
            sx={{
              display: "flex",
              width: "54%",
              height: 495,
              flexDirection: "column",
              alignItems: "center",
              justufyContent: "center",
              pt: 15,
              "@media (max-width: 700px)": {
                width: "62%",
              },
              "@media (max-width: 500px)": {
                width: "100%",
                backgroundPosition: "100%",
              },

              "@media (min-width: 1536px)": {
                mt: 7,
              },
            }}
          >
            <Box align="center">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  background: `url(${icon}) no-repeat`,
                  backgroundColor: "SUiconBg.main",
                  backgroundPosition: "50%",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></Box>
              <Typography
                sx={{
                  mt: 0,
                  color: "SUsign.main",
                  fontSize: 24,
                  fontWeight: 500,
                  letterSpacing: -0.96,

                  "@media (min-width: 1536px)": {
                    fontSize: 35,
                  },
                }}
              >
                Reset
                <Box component={"span"} sx={{ color: "SUup.main" }}>
                  Password
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                width: 289,
                "@media (max-width: 500px)": {
                  width: 300,
                  backgroundPosition: "100%",
                },
                "@media (min-width: 1536px)": {
                  pt: 2,
                  width: 405,
                },
              }}
            >
              <Typography
                align="center"
                sx={{
                  pt: 2,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "-0.35px",
                  color: "SUsign.main",
                }}
              >
                An email has been sent to your email with information on
                resetting your password
              </Typography>
              <Button
                to={"/login"}
                sx={{
                  textTransform: "none",
                  width: "100%",
                  height: 25,
                  bgcolor: "SignUpBtn.main",
                  borderRadius: 25,
                  fontWeight: 500,
                  fontSize: 11,
                  marginTop: "20px",
                  color: "#e8e8e8",
                  transition: "0.3s ease-in-out",
                  letterSpacing: "-0.32px",
                  "&:hover": {
                    bgcolor: "SignUpBtnhover.main",
                  },

                  "@media (min-width: 1536px)": {
                    fontSize: "13px",
                    height: "31px",
                  },
                }}
              >
                Return to Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
