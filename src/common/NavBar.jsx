import {
  AppBar,
  Box,
  IconButton,
  Input,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuDrawer from "./Menu";
import logo from "../assets/images/Logo.png";
import { Search, ShoppingCart, Close } from "@mui/icons-material";
import BasicMenu from "../components/Home/CategoryMenu";
import { Link } from "react-router-dom";

const NavBar = ({ check, change }) => {
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "backColor.main", position: "sticky", top: 0 }}
        elevation={0}
      >
        <Toolbar>
          <Link to={"/"}>
            <img src={logo} alt="logo" style={{ width: "95px" }} />
          </Link>

          <Typography sx={{ flexGrow: 1 }} />

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
                <ShoppingCart color="primary" sx={{ fontSize: "22px" }} />
              </IconButton>
            </Tooltip>

            <BasicMenu />
          </Stack>

          {width < 600 ? (
            <>
              {" "}
              <Box
                className="search"
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5em",
                  cursor: "pointer",
                  zIndex: "10",
                }}
              >
                <Box component={"span"} className="icon">
                  {isActive ? (
                    <Close color="primary" onClick={() => setIsActive(false)} />
                  ) : (
                    <Search color="primary" onClick={() => setIsActive(true)} />
                  )}
                </Box>
              </Box>
              <Box
                className={`searchBox ${isActive ? "active" : ""}`}
                sx={{
                  position: "absolute",
                  right: "-100%",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  background: "#ffffffd0",
                  alignItems: "center",
                  padding: "0 30px",
                  transition: "1s ease-in-out",
                  "&.active": {
                    right: "0",
                  },
                }}
              >
                <Input
                  placeholder="search here . . . "
                  sx={{
                    width: "100%",
                    height: 50,
                    color: "#333",
                  }}
                />
              </Box>
            </>
          ) : (
            ""
          )}

          {width >= 600 || (width < 600 && !isActive) ? <MenuDrawer /> : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
