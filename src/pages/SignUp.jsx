import { Box, Button, Grid, Input, Typography } from "@mui/material";
import React from "react";
import icon from "../assets/images/Revit.svg";
import styled from "@emotion/styled";

const StyledInput = styled(Input)(({ theme }) => ({
  border: `1px solid ${theme.typography.signUpLabel.color}`,
  borderRadius: 25,
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: 10,
  color: `#fff`,
  width: "100%",
}));

const SignUp = () => {
  const InputFeilds = [
    { label: "Name", width: "45%", float: "left" },
    { label: "LastName", width: "51%", float: "right" },
    { label: "DOB", width: "34%", float: "left" },
    { label: "Email", width: "60%", float: "right" },
    { label: "Phone number", width: "45%", float: "left" },
    { label: "National ID number", width: "52%", float: "right" },
    { label: "Password", width: "45%", float: "left" },
    { label: "Verify Password", width: "53%", float: "right" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "backColor.main",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 788,
          height: 494,
          borderRadius: 25,
          backgroundColor: "#242153",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ backgroundColor: "#FFFFFF51", hieght: "100%", width: 364 }}
        />

        <Box
          sx={{
            display: "flex",
            width: "54%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justufyContent: "center",
            pt: 4.5,
          }}
        >
          <Box align="center">
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: "#ccd1da",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={icon} alt="" />
            </Box>
            <Typography
              sx={{
                color: "#225a98",
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: -0.96,
              }}
            >
              Sign <Box component={"span"}>up</Box>
            </Typography>
          </Box>

          <Box sx={{ width: 289 }}>
            {InputFeilds.map(({ label, width, float }) => (
              <Box
                sx={{
                  width: `${width}`,
                  float: `${float}`,
                  mb: 1,
                }}
                component={"div"}
              >
                <Typography variant="signUpLabel">{label}</Typography>
                <StyledInput disableUnderline={true} />
              </Box>
            ))}

            <Button
              sx={{
                width: "100%",
                height: 31,
                bgcolor: "secondary.main",
                borderRadius: 25,
                fontSize: 12,
                margin: "10px 0",
              }}
            >
              SignUp
            </Button>
            <Button
              sx={{
                width: "100%",
                fontSize: 12,
                color: "#fff",
                border: "1px solid grey ",
                borderRadius: 25,
                margin: "5px 0",
              }}
            >
              Signup with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
