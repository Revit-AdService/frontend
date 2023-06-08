import { Box, Fab } from "@mui/material";
import React from "react";
import TopRatedSection from "../components/Home/TopRatedSection";
import MoreServicesSection from "../components/Home/MoreServicesSection";
import { Chat } from "@mui/icons-material";
import NavBar from "../components/Home/NavBar";
import Banner from "../components/Home/Banner";

const Home = ({ check, change }) => {
  return (
    <Box
      sx={{
        position: "relative",
        top: 60,
      }}
    >
      <NavBar check={check} change={change} />
      <Banner />
      <TopRatedSection />
      <MoreServicesSection />
      <Fab
        sx={{
          m: 3,
          position: "fixed",
          float: "left",
          right: "0",
          bottom: "0",
          color: "#FFFFFF",
          backgroundColor: "chatBtn.main",
          // "&:hover": { backgroundColor: "darkblue" },
        }}
        aria-label="chat"
      >
        <Chat />
      </Fab>
    </Box>
  );
};

export default Home;
