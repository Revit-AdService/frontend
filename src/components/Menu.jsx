import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Menu, Person, ShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const MenuDrawer = () => {
  const StyledItem = styled(ListItem)(({ theme }) => ({
    width: "100%",
  }));

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar>
        <Avatar />
      </Toolbar>

      <Toolbar>
        <List>
          <Link to="/">
            <StyledItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </StyledItem>
          </Link>

          <Link to="/login">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Toolbar>

      <Divider />

      {/* <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem> */}
    </Box>
  );

  const anchor = "right";
  return (
    <div>
      <React.Fragment key={anchor}>
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
      </React.Fragment>
    </div>
  );
};

export default MenuDrawer;
