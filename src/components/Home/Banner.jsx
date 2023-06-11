import { Box, Button, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/images/Banner.png";

const Banner = () => {
  
  return (
    <Box
      sx={{
        // display: "flex",
        // position: "relative",
        height: 330,
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40%",
        p: 4,
        '@media (max-width: 500px)': {
          height: 210
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          float: "right",
          flexDirection: "column",
          width: 497,
          height: 271,
          borderRadius: 10,
          background: "#00000099",
          // backdropFilter: "blur(10%) saturate(150%)",
          // WebkitBackdropFilter: "blur(10%) saturate(150%)",
          padding: "54px",
          "@media (max-width: 500px)": {
            width: 281,
            height: 152,
            padding: "35px",
          },
        }}
      >
        <Typography
          sx={{
            color: "#f9f9f9",
            fontSize: 39,
            fontWeight: 600,
            letterSpacing: "-1.56px",
            "@media (max-width: 500px)": {
              fontSize: 22,
            },
          }}
        >
          Package
          <Box
            component={"span"}
            sx={{
              fontSize: 30,
              fontWeight: 400,
              letterSpacing: "-0.88px",
              "@media (max-width: 500px)": {
                fontSize: 18,
              },
            }}
          >
            Design
          </Box>
        </Typography>

        <Typography
          variant="paragraph"
          sx={{
            color: "#e8e8e8",
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: "-0.64px",
            mb: 4,
            "@media (max-width: 500px)": {
              fontSize: 8,
              mb: '10px'
            },
          }}
        >
          Are you looking to get hired in the comfort of your own house. Or
          maybe you are looking for that one skilled personnel to get your
          problems fixed. We got you covered.
        </Typography>

        <Button
          variant="contained"
          sx={{
            hieght: 25,
            width: 80,
            bgcolor: "#242254",
            borderRadius: 14,
            fontSize: 10,
            letterSpacing: -0.4,
            border: "1px solid #f9f9f9",
            "@media (max-width: 500px)": {
              hieght: 17,
              width: 55,
              fontSize: 7,
              padding: '3px'
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
