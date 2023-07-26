import React, { Fragment, useContext, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, Login, Logout, Menu } from "@mui/icons-material";
import {
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Switch,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../context/mainContext";

const menuItems = [
  {
    to: "/",
    icon: <Home />,
    primary: "Home",
  },
  {
    to: "/signup",
    icon: <Login />,
    primary: "Login",
  },
];

const MenuDrawer = ({ check, change }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { user, userData } = useContext(MainContext);
  if (!userData) return "Loading...";

  const handleClick = () => {
    navigate(`/profile/${user}`);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          p: 2.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            alt={`${userData[0]?.firstname} ${userData[0]?.lastname}`}
            src={userData[0]?.avatar}
          />

          <Tooltip title={check ? "Disable DarkTheme" : "Enable DarkTheme"}>
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
        </Box>

        <Typography
          onClick={handleClick}
          sx={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: -0.5,
            mt: 1,
            cursor: "pointer",
          }}
        >
          {`${userData[0]?.firstname} ${userData[0]?.lastname}`}
        </Typography>
      </Box>

      <Divider />

      <Toolbar sx={{ p: 0 }}>
        <List sx={{ width: "100%" }}>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} style={{ textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.primary} sx={{ color: "#000" }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Toolbar>

      <Divider />

      <Button
        startIcon={<Logout />}
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
        }}
      >
        Logout
      </Button>
    </Box>
  );

  const anchor = "right";

  return (
    <div>
      <Fragment key={anchor}>
        <Tooltip title="Menu">
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Menu sx={{ color: "chatBtn.main" }} />
          </IconButton>
        </Tooltip>

        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
};

export default MenuDrawer;
