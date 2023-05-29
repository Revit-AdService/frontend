import { Box, Fab } from "@mui/material";
import React from "react";
import Slider from "../components/Home/Slider";
import TopRatedSection from "../components/Home/TopRatedSection";
import MoreServicesSection from "../components/Home/MoreServicesSection";
import { Chat } from "@mui/icons-material";

const Home = () => {
  return (
    <Box>
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
