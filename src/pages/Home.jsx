import React from "react";
import Slider from "../components/Slider";
import SearchInput from "../components/SearchInput";
import { Grid, Switch } from "@mui/material";
import { Star } from "@mui/icons-material";
import Card from "../components/Card";
import ThemeSwitch from "../components/ThemeSwitch";

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

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
