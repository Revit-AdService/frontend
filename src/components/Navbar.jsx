import React from "react";
import logo from "../assets/images/Logo.png";
import { ArrowDropDown, Menu, ShoppingCart } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar cont">
      <img src={logo} alt="Revit AdService" />
      <Button
        sx={{
          color: "#242254",
          fontSize: "7px",
        }}
        varient="text"
        endIcon={
          <ArrowDropDown
            sx={{
              marginLeft: "-13px",
              marginTop: "-4px",
            }}
          />
        }
      >
        Category
      </Button>
      <Button
        sx={{
          color: "#242254",
          fontSize: "7px",
        }}
        varient="text"
        endIcon={
          <ShoppingCart
            sx={{
              marginLeft: "-7px",
              marginTop: "-3px",
              width: "10px",
              height: "10px",
            }}
          />
        }
      >
        CART
      </Button>
      <Button
        sx={{
          color: "#242254",
          fontSize: "7px",
        }}
        varient="text"
      >
        signup/login
      </Button>
      <Avatar />
      <Menu sx={{ marginLeft: "5px" }} />
    </div>
  );
};

export default Navbar;
