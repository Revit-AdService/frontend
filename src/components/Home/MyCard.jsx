import { Verified } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Tooltip, Typography } from "@mui/material";
import React from "react";

const MyCard = () => {
  return (
    <Box
      className="card"
      sx={{
        display: "flex",
        alignItems: "center",
        border: "0",
        margin: "10px 0",
      }}
    >
      <Box
        sx={{
          width: 291,
          height: 220,
          bgcolor: "#e8e8e8",
          borderRadius: 15,
        }}
      ></Box>

      <Typography m={1} align="center">
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
        <Avatar sx={{ width: 61, height: 61, mr: 1 }} />

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
            <Typography variant="h8">John Smith</Typography>
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
                  backgroundColor: "#e1209e",
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
            <Typography fontSize={9} mr={2}>
              <Box
                component={"span"}
                color={"#e1209e"}
                sx={{ fontWeight: 600 }}
              >
                100
              </Box>{" "}
              sales
            </Typography>

            <Typography fontSize={9}>
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
    </Box>
  );
};

export default MyCard;
