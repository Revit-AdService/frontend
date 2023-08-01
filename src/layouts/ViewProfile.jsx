import {
  AppBar,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { NavLink, Outlet, useParams } from "react-router-dom";
import banner from "../assets/images/Banner.png";
import { Verified } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function ServiceProviderProfile() {
  const { profile_id } = useParams();
  //   const { userData } = useContext(MainContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchFromAPI(`authors/${profile_id}`).then((response) => setData(response));
  }, [profile_id]);

  if (!data)
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "90vh",
        }}
      >
        <CircularProgress sx={{ color: "spDeleteBtn.main" }} />
      </Box>
    );

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
          background: data.banner.url
            ? `url(${data.banner.url})`
            : `url(${banner})`,
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
              src={data?.avatar}
              alt={`${data?.firstname} ${data?.lastname}`}
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

            <Box sx={{ pb: 1 }}>
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
                {`${data?.firstname} ${data?.lastname}`}
                <Verified
                  sx={{ color: "gold", fontSize: ".9rem", ml: "0.4375rem" }}
                />
              </Typography>

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
                {data?.service_type}
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
        {[
          { title: "Catalog", link: `/view-profile/${profile_id}/catalog` },
          { title: "Profile", link: `/view-profile/${profile_id}/catalog` },
          { title: "Posts", link: `/view-profile/${profile_id}/posts` },
        ].map(({ title, link }, id) => (
          <NavLink key={id} to={link}>
            <Button
              variant={"contained"}
              sx={{
                color: "spHeading1.main",
                fontWeight: 600,
                borderRadius: "1.4375rem",
                bgcolor: "spNavBtnBg.main",
                boxShadow: "none",
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
