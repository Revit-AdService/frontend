import { Box, Fab } from "@mui/material";
import React from "react";
import Slider from "../components/Home/Slider";
import TopRatedSection from "../components/Home/TopRatedSection";
import MoreServicesSection from "../components/Home/MoreServicesSection";
import { Chat } from "@mui/icons-material";
import SearchBar from "../components/Home/SearchBar";
import NavBar from "../components/Home/NavBar";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Slider />
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
