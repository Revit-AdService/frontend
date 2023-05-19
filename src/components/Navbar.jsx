import React from "react";
import logo from "../assets/images/Logo.png";
import { ArrowDropDown, Menu, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import "../assets/Global.css";

const Navbar = () => {
  return (
    <div className="navbar cont">
      <img src={logo} alt="Revit AdService" />
      <Button className="Button" varient="text" endIcon={<ArrowDropDown />}>
        Category
      </Button>
      <Button className="Button " varient="text" endIcon={<ShoppingCart />}>
        CART
      </Button>
      <Button className="Button" varient="text">
        signup/login
      </Button>
      <div className="avatar-container"></div>
      <Menu className="btn-menu"/>
    </div>
  );
};

export default Navbar;
