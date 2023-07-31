import { Box, Button, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/images/Banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { mobile: 210, tablet: 332, laptop: 315, largeDesktop: 330 },
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          width: { mobile: 281, tablet: 517, laptop: 638, largeDesktop: 708 },
          height: { mobile: 152, tablet: 278, laptop: 249, largeDesktop: 276 },
          borderRadius: "43px",
          background: "#aaaaaa99",
          // backdropFilter: "blur(10%) saturate(150%)",
          // WebkitBackdropFilter: "blur(10%) saturate(150%)",
        }}
      >
        <Typography
          sx={{
            color: "#f9f9f9",
            fontSize: {
              mobile: "18px",
              tablet: "29px",
              laptop: "35px",
              largeDesktop: "38px",
            },
            fontWeight: 600,
            cursor: "default",
          }}
        >
          Rev
          <Box
            component={"span"}
            sx={{
              fontWeight: 400,
            }}
          >
            it Ad Service
          </Box>
        </Typography>

        <Typography
          variant="paragraph"
          sx={{
            color: "#e8e8e8",
            width: {
              mobile: "202px",
              tablet: "370px",
              laptop: "456px",
              largeDesktop: 506,
            },
            fontSize: { mobile: "8px", tablet: "13px" },
            fontWeight: 500,
            textAlign: "center",
            fontStyle: "italic",
            cursor: "default",
          }}
        >
          Are you looking to get hired in the comfort of your own house. Or
          maybe you are looking for that one skilled personnel to get your
          problems fixed. We got you covered.
        </Typography>

        <Button
          sx={{
            mt: "10px",
            width: {
              mobile: "55px",
              tablet: "100px",
              laptop: "122px",
              largeDesktop: "154px",
            },
            hieght: {
              mobile: "17px",
              tablet: "30px",
              laptop: "37px",
              largeDesktop: "47px",
            },
            bgcolor: "#e2209e",
            borderRadius: { mobile: "14px", largeDesktop: "23px" },
            fontSize: {
              mobile: "7px",
              tablet: "10px",
              laptop: "12px",
              largeDesktop: "15px",
            },
            color: "#ececec",
            fontWeight: 500,
            textTransform: "capitalize",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
