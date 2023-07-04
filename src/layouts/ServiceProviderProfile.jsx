import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import banner from "../assets/images/Banner.png";
import { Edit, Verified } from "@mui/icons-material";

function ServiceProviderProfile() {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "backColor.main" }} elevation={0}>
        <Toolbar>
          <Link to={"/"}>
            <img src={logo} alt="logo" style={{ width: "95px" }} />
          </Link>
        </Toolbar>
      </AppBar>

      {/* Banner Start */}
      <Box
        sx={{
          mt: 7,
          height: 176,
          background: `url(${banner}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "40%",
          position: "relative",

          "@media (min-width: 700px)": {
            height: 363,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            background: "linear-gradient(to bottom, transparent, #000000)",
            position: "absolute",
            width: "100%",
            height: 155,
            bottom: 0,
            p: 2,

            "@media (min-width: 700px)": {
              height: 318,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              gap: 2,
            }}
          >
            <Avatar
              sx={{
                width: 70,
                height: 70,

                "@media (min-width: 700px)": {
                  width: 144,
                  height: 144,
                },
              }}
            />

            <Box
              sx={{
                display: "grid",
                placeContent: "center",
                position: "absolute",
                left: 65,
                bottom: 3,
                bgcolor: "#e8e8e8",
                borderRadius: "50%",
                width: "1rem",
                height: "1rem",

                "@media (min-width: 700px)": {
                  width: "2rem",
                  height: "2rem",
                  left: 135,
                },
              }}
            >
              <Edit
                sx={{
                  color: "#000",
                  fontSize: ".75rem",

                  "@media (min-width: 700px)": {
                    fontSize: "1.25rem",
                  },
                }}
              />
            </Box>

            <Box sx={{ pb: 1 }}>
              <Link
                to={"/profile/personal-info"}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#e8e8e8",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "-0.035rem",
                    textDecoration: "none",

                    "@media (min-width: 700px)": {
                      fontSize: "1.6875rem",
                    },
                  }}
                >
                  John Smith
                  <Verified
                    sx={{ color: "gold", fontSize: ".9rem", ml: "0.4375rem" }}
                  />
                </Typography>
              </Link>

              <Typography
                sx={{
                  color: "#e8e8e8",
                  fontSize: "0.5rem",
                  fontWeight: 400,
                  letterSpacing: "0.02rem",
                  mt: -0.1,

                  "@media (min-width: 700px)": {
                    fontSize: "0.9375rem",
                  },
                }}
              >
                Graphics Designer
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Navbar Start */}
      <AppBar
        elevation={0}
        sx={{
          position: "relative",
          bgcolor: "backColor.main",
          boxShadow: "0 1rem 1rem #24235090",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          height: "2.3125rem",
          pl: 5,
          pr: 5,

          "@media (min-width: 700px)": {
            height: "4.75rem",
          },
        }}
      >
        {[
          { title: "Catalog", link: "/profile/catalog" },
          { title: "Post", link: "" },
          { title: "Order Deals", link: "/profile/order-deals" },
        ].map(({ title, link, key }) => (
          <NavLink to={link}>
            <Button
              variant={"contained"}
              key={key}
              sx={{
                color: "spHeading1.main",
                fontSize: "0.4375rem",
                fontWeight: 600,
                borderRadius: "1.4375rem",
                bgcolor: "spNavBtnBg.main",
                height: "1.375rem",

                "@media (min-width: 700px)": {
                fontSize: "0.8125rem",
                height: "2.75rem",
                padding: "0 3rem"
                },
              }}
            >
              {title}
            </Button>
          </NavLink>
        ))}
      </AppBar>

      <Outlet />
    </Box>
  );
}

export default ServiceProviderProfile;
