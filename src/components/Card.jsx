import { Verified } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card__picture"></div>
      <h3>Graphics Design and Logo Design</h3>
      <div className="profile">
        <Avatar className="avatar" />
        <div className="right">
          <div className="top">
            <h4>John Smith</h4>
            <Verified
              sx={{ fontSize: "17px", color: "gold", margin: "0 5px" }}
            />
            <Button
              sx={{ marginLeft: "7px",float:'left' }}
              variant="contained"
              className="orderBtn"
            >
              Order
            </Button>
          </div>
          <div className="bottom">
            <p>
              <span className="sales">100</span> sales
            </p>
            <p>
              <span className="recommendations">194</span> recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
