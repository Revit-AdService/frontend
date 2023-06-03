import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MyCard from "./MyCard";

const MoreServicesSection = () => {
  return (
    <Box id="more-services">
      <Divider textAlign="left" variant="middle" sx={{ borderTopWidth: "4px" }}>
        <Box
          sx={{
            bgcolor: "cardColor.main",
            mt: 2,
            mb: 2,
            borderRadius: 5,
            pt: 1,
            pb: 0.75,
            pr: 1,
            pl: 1,
          }}
        >
          <Typography variant="h1" sx={{ color: "heading1.main" }}>
            MORE
            <Box
              component="span"
              color={"#e2209e"}
              sx={{ color: "heading2.main" }}
            >
              {" "}
              SERVICES
            </Box>
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
