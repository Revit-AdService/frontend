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
          position: "absolute",
          float: "left",
          left: "0",
        }}
        color="primary"
        aria-label="chat"
      >
        <Chat />
      </Fab>
    </Box>
  );
};

export default Home;
