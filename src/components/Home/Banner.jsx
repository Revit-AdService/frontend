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
        height: { mobile: 210, tablet: 330 },
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
          width: { mobile: 281 },
          height: { mobile: 152 },
          borderRadius: "43px",
          background: "#aaaaaa99",
          // backdropFilter: "blur(10%) saturate(150%)",
          // WebkitBackdropFilter: "blur(10%) saturate(150%)",
        }}
      >
        <Typography
          sx={{
            color: "#f9f9f9",
            fontSize: { mobile: "18px" },
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
            width: { mobile: "202px" },
            fontSize: { mobile: "8px" },
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
            width: { mobile: "55px" },
            hieght: { mobile: "17px" },
            bgcolor: "#e2209e",
            borderRadius: { mobile: "14px" },
            fontSize: { mobile: "7px" },
            color: "#ececec",
            fontWeight: 500,
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
