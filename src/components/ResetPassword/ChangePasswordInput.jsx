import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import icon from "../../assets/images/Revit.svg";
import styled from "@emotion/styled";

const StyledInput = styled(Input)(({ theme }) => ({
  border: `1px solid ${theme.typography.signUpLabel.color}`,
  borderRadius: 25,
  padding: "0 10px",
  fontSize: 12,
  color: "SUInputTxt.main",
  width: "100%",

  "@media (min-width: 1536px)": {
    fontSize: "14px",
  },
}));

const ChangePasswordInput = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "54%",
        height: 495,
        flexDirection: "column",
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
        {[
          { placeholder: "New Password", width: "100%", float: "right" },
          { placeholder: "Confirm Password", width: "100%", float: "left" },
        ].map(({ placeholder, width, float }) => (
          <Box
            sx={{
              width: `${width}`,
              float: `${float}`,
              mt: 2.75,
            }}
            component={"div"}
          >
            <StyledInput type="password" placeholder={placeholder} disableUnderline={true} />
          </Box>
        ))}

        <Button
          sx={{
            textTransform: "none",
            width: "100%",
            height: 25,
            bgcolor: "SignUpBtn.main",
            borderRadius: 25,
            fontWeight: 500,
            fontSize: 11,
            marginTop: 5,
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
          Set Password
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePasswordInput;
