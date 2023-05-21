import React from "react";
import logo from "../assets/images/Logo.png";
import { ArrowDropDown, Menu, ShoppingCart } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import '../assets/Navbar.scss'

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
      <Avatar/>
      <Menu className="btn-menu"/>
    </div>
  );
};

export default Navbar;
