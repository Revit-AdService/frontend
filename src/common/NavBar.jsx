import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import MenuDrawer from "../components/Menu";
import logo from "../assets/images/Logo.png";
import { Category, Search, ShoppingCart, DarkMode } from "@mui/icons-material";

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
    // vertical padding + font size from searchIcon
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

const NavBar = () => {
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "inherit" }}
        position="static"
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
              <IconButton size="large" aria-label="category">
                <DarkMode color="primary" />
              </IconButton>
            </Tooltip>


            <Tooltip title="Cart">
              <IconButton size="large" aria-label="cart">
                <StyledBadge badgeContent={1} color="primary">
                  <ShoppingCart sx={{ color: "primary", fontSize: "17px" }} />
                </StyledBadge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Category">
              <IconButton size="large" aria-label="category">
                <Category color="primary" />
              </IconButton>
            </Tooltip>
          </Stack>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
