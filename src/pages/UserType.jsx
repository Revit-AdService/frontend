import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuDrawer from "../common/Menu";
import RevitLogo from "../assets/images/Logo.png";
import ServiceProviderIcn from "../assets/images/Login-SignUp/Service-Provider.png";
import ClientIcn from "../assets/images/Login-SignUp/Client.png";
import RevitIcon from "../assets/images/Revit.svg";

const UserType = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {/* <AppBar
        sx={{
          bgcolor: "backColor.main",
        }}
        elevation={0}
      >
        <Toolbar>
          <Link to={"/"}>
            <img
              src={RevitLogo}
              style={{ width: "95px", cursor: "pointer" }}
              alt="revit-logo"
            />
          </Link>

          <Typography flexGrow={1} />
          <MenuDrawer />
        </Toolbar>
      </AppBar> */}

      <Box
        sx={{
          height: 50,
          width: 50,
          background: `url(${RevitIcon})`,
          backgroundSize: "cover",

          "@media (max-width: 620px)": {
            height: 25,
            width: 25,
          },
        }}
      />

      <Typography
        sx={{
          color: "utTitle.main",
          fontSize: 27,
          fontWeight: 600,
          letterSpacing: -1.08,
          "@media (max-width: 620px)": {
            fontSize: 13,
          },
        }}
      >
        Select User Type
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          width: 611,
          height: 317,
          bgcolor: "utCardBg.main",
          borderRadius: "79px",
          mt: "32px",

          "@media (max-width: 620px)": {
            width: 339,
            borderRadius: "40px",
            height: 176,
            gap: 5,
          },
        }}
      >
        {[
          {
            title: "Client",
            imgSrc: ClientIcn,
            link: "/signup-as-client",
          },
          {
            title: "Service Provider",
            imgSrc: ServiceProviderIcn,
            link: "/signup-as-service-provider",
          },
        ].map((item, index) => (
          <Link key={index} to={item.link} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                width: 213,
                height: 201,
                bgcolor: "utBtnBg.main",
                borderRadius: "45px",

                "@media (max-width: 620px)": {
                  width: 118,
                  height: 112,
                  borderRadius: "31px",
                  gap: 1,
                },
              }}
            >
              <Box sx={{ "@media (max-width: 620px)": { width: "50px" } }}>
                <img
                  style={{ width: "100%" }}
                  src={item.imgSrc}
                  alt={item.title}
                />
              </Box>
              <Typography
                sx={{
                  color: "#0e112b",
                  textTransform: "capitalize",
                  fontSize: 17,
                  fontWeight: 500,
                  letterSpacing: "-0.68px",

                  "@media (max-width: 620px)": {
                    fontSize: 10,
                    letterSpacing: "-0.28px",
                  },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default UserType;
