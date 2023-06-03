import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import MenuDrawer from "../Menu";
import logo from "../../assets/images/Logo.png";
import {
  Category,
  Search,
  ShoppingCart,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import BasicMenu from "../CategoryMenu";

const SearchInput = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sd")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavBar = ({ check, change }) => {
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "backColor.main", }}
        position="fixed"
        elevation={0}
      >
        <Toolbar>
          <IconButton>
            <img src={logo} alt="logo" />
          </IconButton>

          <Typography sx={{ flexGrow: 1 }} />

          {/* <SearchInput>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </SearchInput> */}

          <Stack direction="row" spacing={0.25}>
            <Tooltip title="DarkMode">
              <IconButton>
                <Switch
                  size="small"
                  defaultChecked
                  inputProps={{ "aria-label": "checkbox" }}
                  onChange={change}
                  checked={check}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Cart">
              <IconButton size="large" aria-label="cart">
                <StyledBadge badgeContent={1} color="secondary">
                  <ShoppingCart color="primary" sx={{ fontSize: "17px" }} />
                </StyledBadge>
              </IconButton>
            </Tooltip>

            <BasicMenu/>
          </Stack>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
