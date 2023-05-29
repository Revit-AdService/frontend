import { Verified } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

const MyCard = () => {
  return (
    <Paper
      className="card"
      sx={{
        display: "flex",
        alignItems: "center",
        border: "0",
        margin: "10px 0",
      }}
      elevation={0}
    >
      <Box
        sx={{
          width: 291,
          height: 220,
          bgcolor: "cardColor.main",
          borderRadius: 15,
        }}
      ></Box>

      <Typography
        variant="title"
        align="center"
        sx={{ m: 1, color: "post.main" }}
      >
        Graphics Design and Logo Design
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 61, height: 61, mr: 1, bgcolor: "cardColor.main" }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography variant="artistName" sx={{ color: "post.main" }}>
              John Smith
            </Typography>
            <Verified
              sx={{ fontSize: "17px", color: "gold", margin: "0 5px" }}
            />

            <Tooltip title="Order">
              <Button
                sx={{
                  marginLeft: "7px",
                  float: "left",
                  width: 77,
                  height: 16,
                  fontSize: 7,
                  borderRadius: 9,
                  backgroundColor: "orderBtn.main",
                }}
                variant="contained"
              >
                Order
              </Button>
            </Tooltip>
          </Box>

          <Box
            mt={1}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography variant="smallText" sx={{ color: "post.main", mr: 2 }}>
              <Box
                component={"span"}
                color={"#e1209e"}
                sx={{ fontWeight: 600 }}
              >
                100
              </Box>{" "}
              sales
            </Typography>

            <Typography variant="smallText" sx={{ color: "post.main" }}>
              <Box
                component={"span"}
                color={"#e1209e"}
                sx={{ fontWeight: 600 }}
              >
                190
              </Box>{" "}
              recommendations
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default MyCard;
