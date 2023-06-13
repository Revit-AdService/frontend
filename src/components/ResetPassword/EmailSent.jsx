import React from "react";
import { Box, Button, Typography } from "@mui/material";
import icon from "../../assets/images/Revit.svg";

const EmailSent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "54%",
        height: 495,
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
            color: "rpTxtMsg.main",
          }}
        >
          An email has been sent to your email with information on resetting
          your password
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
  );
};

export default EmailSent;
