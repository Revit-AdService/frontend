import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import MyCard from "./MyCard";

const TopRatedSection = () => {
  const s = 12;
  const m = 6;
  const l = 4;

  return (
    <Paper id="top-rated-services" elevation={0}>
      <Box
        m={2.5}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "heading1.main" }}>
          TOP RATED
          <Box component="span" sx={{ color: "heading2.main" }}>
            {" "}
            SERVICES
          </Box>
        </Typography>
        <Star
          sx={{
            color: "heading1.main",
            fontSize: 27,
            ml: 0.5,
            mt: 0.1,
          }}
        />
      </Box>

      <Grid
        container
        sx={{
          bgcolor: "background",
        }}
      >
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
    </Paper>
  );
};

export default TopRatedSection;
