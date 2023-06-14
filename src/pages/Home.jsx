import { Box, Fab, IconButton, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopRatedSection from "../components/Home/TopRatedSection";
import MoreServicesSection from "../components/Home/MoreServicesSection";
import { Chat, Search } from "@mui/icons-material";
import NavBar from "../components/Home/NavBar";
import Banner from "../components/Home/Banner";

const Home = ({ check, change }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        top: 60,
      }}
    >
      <NavBar check={check} change={change} />

      <Banner />

      {width >= 600 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            pt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              width: "475px",
              height: "100%",
              bgcolor: "searchBg.main",
              padding: "0px 20px",
              borderRadius: "50px",
              transition: "1s ease-in-out",
            }}
          >
            <IconButton sx={{ left: "0%" }}>
              <Search color="secondary" />
            </IconButton>

            <Input
              placeholder="search here . . . "
              sx={{
                width: "100%",
                height: 30,
                fontSize: 13,
                color: "#f9f9f9",
              }}
            />
          </Box>
        </Box>
      ) : (
        ""
      )}

      <TopRatedSection />
      <MoreServicesSection />
      <Fab
        sx={{
          m: 3,
          position: "fixed",
          float: "left",
          right: "0",
          bottom: "0",
          color: "#FFFFFF90",
          backgroundColor: "chatBtn.main",
          transition: "0.3s ease-in-out",

          "&:hover": {
            backgroundColor: "chatBtn.main",
            color: "#f9f9f9",
            height: 70,
            width: 70,
          },
        }}
        aria-label="chat"
      >
        <Chat />
      </Fab>
    </Box>
  );
};

export default Home;
