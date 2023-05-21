import React from "react";
import Slider from "../components/Slider";
import SearchInput from "../components/SearchInput";
import { Switch } from "@mui/material";
import { Star } from "@mui/icons-material";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <SearchInput />
      <div className="section__topRated">
        <div className="heading">
          <h2>
            Top Rated <span>Services</span>
            <Star sx={{ fontSize: "1rem" }} />
          </h2>
          <Switch defaultChecked size="small" />
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
