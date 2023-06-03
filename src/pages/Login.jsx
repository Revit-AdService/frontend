import { Box, Grid, Input, Typography } from "@mui/material";
import React from "react";
import icon from "../assets/images/Revit.svg";

const Login = () => {
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

        <Box sx={{ display: "flex", flexDirection: 'column' }}>
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

          <Box>
            <Grid container>
              <Grid item>
                <Typography>Name</Typography>
                <Input aria-label="name" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
