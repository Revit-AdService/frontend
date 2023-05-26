import { Box } from "@mui/material";
import React from "react";
import Slider from "../components/Home/Slider";
import TopRatedSection from "../components/Home/TopRatedSection";
import MoreServicesSection from "../components/Home/MoreServicesSection";

const Home = () => {
  return (
    <Box>
      <Slider />
      <TopRatedSection />
      <MoreServicesSection />
    </Box>
  );
};

export default Home;
