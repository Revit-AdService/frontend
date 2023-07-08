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
        <Typography
          variant="h1"
          sx={{
            color: "heading1.main",
            cursor: "default",

            "@media (max-width: 500px)": { fontSize: "20px" },
          }}
        >
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
            "@media (max-width: 500px)": { fontSize: "20px" },
          }}
        />
      </Box>

      <Grid
        container
        sx={{
          bgcolor: "background",
        }}
      >
        <Grid item mobile={s} tablet={m} laptop={l}>
          <MyCard />
        </Grid>
        <Grid item mobile={s} tablet={m} laptop={l}>
          <MyCard />
        </Grid>
        <Grid item mobile={s} tablet={m} laptop={l}>
          <MyCard />
        </Grid>
        <Grid item mobile={s} tablet={m} laptop={l}>
          <MyCard />
        </Grid>
        <Grid item mobile={s} tablet={m} laptop={l}>
          <MyCard />
        </Grid>
        <Grid item mobile={s} tablet={m} laptop={l}>
          <MyCard />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TopRatedSection;
