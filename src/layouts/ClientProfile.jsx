import { AppBar, Avatar, Box, Button, Typography } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import banner from "../assets/images/Banner.png";
import { Verified } from "@mui/icons-material";

const ClientProfile = () => {
  return (
    <Box>
      {/* Banner Start */}
      <Box
        sx={{
          // mt: 7,
          height: {
            mobile: 176,
            tablet: 363,
            laptop: 258,
          },
          background: `url(${banner}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "40%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            background: "linear-gradient(to bottom, transparent, #000000)",
            position: "absolute",
            width: "100%",
            height: {
              mobile: 155,
              tablet: 318,
            },
            bottom: 0,
            p: 2,
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
              src={""}
              alt={"Takudzwa Jauki"}
              sx={{
                width: {
                  mobile: 70,
                  tablet: 144,
                  laptop: 90,
                },
                height: {
                  mobile: 70,
                  tablet: 144,
                  laptop: 90,
                },
              }}
            />

            {/* <Box
              sx={{
                display: "grid",
                placeContent: "center",
                position: "absolute",
                bottom: 3,
                bgcolor: "#e8e8e8",
                borderRadius: "50%",
                width: {
                  mobile: "1rem",
                  tablet: "2rem",
                  laptop: "1.5rem",
                },
                height: {
                  mobile: "1rem",
                  tablet: "2rem",
                  laptop: "1.5rem",
                },
                left: {
                  mobile: 65,
                  tablet: 135,
                  laptop: 85,
                },
              }}
            >
              <Link to={`/profile/${user_id}/edit-profile-details`}>
                <Edit
                  sx={{
                    color: "#000",
                    fontSize: {
                      mobile: ".75rem",
                      tablet: "1.25rem",
                      laptop: "1rem",
                    },
                  }}
                />
              </Link>
            </Box> */}

            <Box sx={{ pb: 1 }}>
              <Link to={""} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#e8e8e8",
                    fontWeight: 600,
                    letterSpacing: "-0.035rem",
                    textDecoration: "none",
                    fontSize: {
                      mobile: "0.875rem",
                      tablet: "1.6875rem",
                      laptop: "1.3125rem",
                    },
                  }}
                >
                  Takudzwa Jauki
                  <Verified
                    sx={{ color: "gold", fontSize: ".9rem", ml: "0.4375rem" }}
                  />
                </Typography>
              </Link>

              <Typography
                sx={{
                  color: "#e8e8e8",
                  fontWeight: 400,
                  letterSpacing: "0.02rem",
                  mt: -0.1,
                  fontSize: {
                    mobile: "0.5rem",
                    tablet: "0.9375rem",
                    laptop: "1.0625",
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
          zIndex: 0,
          position: "relative",
          bgcolor: "backColor.main",
          boxShadow: "0 1rem 1rem #24235090",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: { mobile: 2, tablet: "2.5rem", laptop: "4.75rem" },
          pl: 5,
          pr: 5,
          height: {
            mobile: "2.3125rem",
            tablet: "4.75rem",
            laptop: "3.8125rem",
          },
        }}
      >
        {[{ title: "Reviews", link: `` }].map(({ title, link }, id) => (
          <NavLink key={id} to={link}>
            <Button
              variant={"contained"}
              sx={{
                color: "spHeading1.main",
                fontWeight: 600,
                borderRadius: "1.4375rem",
                bgcolor: "spNavBtnBg.main",
                boxShadow: "none",
                transition: "ease-in-out 0.3s",
                padding: { tablet: "0 3rem" },
                height: {
                  mobile: "1.375rem",
                  tablet: "2.75rem",
                  laptop: "2.5rem",
                },
                fontSize: {
                  mobile: "0.4375rem",
                  tablet: "0.8125rem",
                },

                ":hover": {
                  bgcolor: "spNavBtnBg.main",
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
};

export default ClientProfile;