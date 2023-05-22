import React from "react";
import logo from "../assets/images/Logo.png";
import { ArrowDropDown, Menu, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuDrawer from "./Menu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0",
  },
}));

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "inherit" }} position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="logo" />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }}></Typography>
        <Stack direction="row" spacing={1}>
          <IconButton size="large" color="#242254" aria-label="cart">
            <StyledBadge badgeContent={1} color="primary">
              <ShoppingCart sx={{ color: "#242254", fontSize: "17px" }} />
            </StyledBadge>
          </IconButton>

          {/* <Button color="inherit" href="">
            Login
          </Button> */}
        </Stack>
        {/* <Menu sx={{ color: "#242254" }} /> */}
        <MenuDrawer/>
      </Toolbar>
    </AppBar>

    // <div className="navbar cont">
    //   <img src={logo} alt="Revit AdService" />
    //   <Button
    //     sx={{
    //       color: "#242254",
    //       fontSize: "7px",
    //     }}
    //     varient="text"
    //     endIcon={
    //       <ArrowDropDown
    //         sx={{
    //           marginLeft: "-13px",
    //           marginTop: "-4px",
    //         }}
    //       />
    //     }
    //   >
    //     Category
    //   </Button>
    //   <Button
    //     sx={{
    //       color: "#242254",
    //       fontSize: "7px",
    //     }}
    //     varient="text"
    //     endIcon={
    //       <ShoppingCart
    //         sx={{
    //           marginLeft: "-7px",
    //           marginTop: "-3px",
    //           width: "10px",
    //           height: "10px",
    //         }}
    //       />
    //     }
    //   >
    //     CART
    //   </Button>
    //   <Button
    //     sx={{
    //       color: "#242254",
    //       fontSize: "7px",
    //     }}
    //     varient="text"
    //   >
    //     signup/login
    //   </Button>
    //   <Avatar />
    //   <Menu sx={{ marginLeft: "5px" }} />
    // </div>
  );
};

export default Navbar;
