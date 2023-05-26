import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MyCard from "./MyCard";

const MoreServicesSection = () => {
  return (
    <Box>
      <Divider textAlign="left" variant="middle">
        <Box
          sx={{
            bgcolor: "#e8e8e8",
            width: "10rem",
            m: 2,
            borderRadius: 5,
            pt: 1,
            pb: 0.75,
            pr: 1,
            pl: 1,
            left: 0,
            float: "left",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            MORE
            <Typography component="span" color={"#e2209e"} fontWeight={"600"}>
              {" "}
              SERVICES
            </Typography>
          </Typography>
        </Box>
      </Divider>

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoreServicesSection;
