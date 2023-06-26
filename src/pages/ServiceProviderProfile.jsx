import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import banner from "../assets/images/Banner.png";
import { Edit, Verified } from "@mui/icons-material";
import Landing from "../components/ServiceProviderProfile/Landing";
import Catalog from "../components/ServiceProviderProfile/Catalog";
import CreateCatalog from "../components/ServiceProviderProfile/CreateCatalog";

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
            <Avatar sx={{ width: 70, height: 70 }} />

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
              }}
            >
              <Edit sx={{ color: "#000", fontSize: "0.75rem" }} />
            </Box>

            <Box sx={{ pb: 1 }}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#e8e8e8",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "-0.035rem",
                }}
              >
                John Smith
                <Verified
                  sx={{ color: "gold", fontSize: ".9rem", ml: "0.4375rem" }}
                />
              </Typography>

              <Typography
                sx={{
                  color: "#e8e8e8",
                  fontSize: "0.5rem",
                  fontWeight: 400,
                  letterSpacing: "0.02rem",
                  mt: -0.1,
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
        sx={{
          position: "relative",
          bgcolor: "#f9f9f9",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          height: "2.3125rem",
          pl: 5,
          pr: 5,
        }}
      >
        {[
          { title: "Catalog" },
          { title: "Post" },
          { title: "Order Deals" },
        ].map(({ title, key }) => (
          <Button
            variant={"contained"}
            key={key}
            sx={{
              color: "#242254",
              fontSize: "0.4375rem",
              fontWeight: 600,
              borderRadius: "1.4375rem",
              bgcolor: "#e6e6e5",
              height: "1.375rem",
            }}
          >
            {title}
          </Button>
        ))}
      </AppBar>

      {/* <Landing /> */}
      {/* <Catalog /> */}
      <CreateCatalog />
    </Box>
  );
}

export default ServiceProviderProfile;
