import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, IconButton, Link, Tooltip } from "@mui/material";
import { Category } from "@mui/icons-material";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Category">
        <IconButton size="large" aria-label="category">
          <Category
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            href="#top-rated-services"
            sx={{
              color: "post.main",
              textDecoration: "none",
              fontSize: 14,
              letterSpacing: -1,
            }}
          >
            Top Rated Services
          </Link>
        </MenuItem>
        <Divider variant="middle" />
        <MenuItem onClick={handleClose}>
          <Link
            href="#more-services"
            sx={{
              color: "post.main",
              textDecoration: "none",
              fontSize: 14,
              letterSpacing: -1,
            }}
          >
            More Services
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
