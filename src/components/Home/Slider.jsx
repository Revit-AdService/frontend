import { Box, Skeleton } from "@mui/material";
import React from "react";

const Slider = () => {
  return (
    <Box
      sx={{
        bgcolor: "ccc",
        width: "100vw",
        height: 200,
      }}
    >
      <Skeleton width={'100vw'}>Coming Soon</Skeleton>
      <Skeleton height={200}>

      </Skeleton>
    </Box>
  );
};

export default Slider;
