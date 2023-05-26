import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import MyCard from "./MyCard";

const TopRatedSection = () => {
  const s = 12;
  const m = 6;
  const l = 4;

  return (
    <Box>
      <Box
        m={2.5}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography>
          TOP RATED
          <Box component="span" color={"#e2209e"}>
            {" "}
            SERVICES
          </Box>
        </Typography>
        <Star
          sx={{
            color: "#242254;",
            fontSize: 20,
          }}
        />
      </Box>

      <Grid container>
        <Grid item xs={s} sm={m} md={l}>
          <MyCard />
        </Grid>
        <Grid item xs={s} sm={m} md={l}>
          <MyCard />
        </Grid>
        <Grid item xs={s} sm={m} md={l}>
          <MyCard />
        </Grid>
        <Grid item xs={s} sm={m} md={l}>
          <MyCard />
        </Grid>

      </Grid>
    </Box>
  );
};

export default TopRatedSection;
