import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  IconButton,
  Input,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { FilterAlt, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";

const CategoryFilter = ({ onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    onSelect(category);
  }, [category]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Choose Category">
        <IconButton onClick={handleClick} size="large" aria-label="category">
          <FilterAlt
            sx={{ color: "#e2209e" }}
            color="primary"
            id="category-button"
            aria-controls={open ? "category-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            height: "258px",
            width: "254px",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
            borderRadius: "36px",
            padding: "18px 0",
          },

          "@media (min-width: 768px)": {
            height: "258px",
            width: "254px",
          },
        }}
      >
        <Box>
          <Paper
            component="form"
            // onSubmit={handleSubmit}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#e8e8e8",
              ml: "24px",
              mb: "10px",
              boxShadow: "none",
              borderRadius: { mobile: "18px" },
              width: { mobile: "209px" },
              height: { mobile: "34px" },
            }}
          >
            <IconButton type="submit" sx={{ color: "#999" }}>
              <Search />
            </IconButton>
            <Input
              type="text"
              disableUnderline
              sx={{
                width: { mobile: "100%" },
                fontSize: "10px",
                fontWeight: 500,
              }}
            />
          </Paper>

          <Typography
            pl={"54px"}
            my={"8px"}
            sx={{ fontSize: "6px", fontWeight: 600, color: "#e2209e" }}
          >
            Categories
          </Typography>

          <Box sx={{ height: "145px", overflowY: "auto" }}>
            {[
              "Advertising Design",
              "Logo Design",
              "Marketing Design",
              "Fashion ",
              "Data Collection",
              "Graphics Design",
              "Gadgets and Accesories",
              "Mining",
              "Programming and Coding",
              "Accounting",
            ].map((item, id) => (
              <MenuItem
                key={id}
                onClick={() => {
                  setCategory(item);
                  setAnchorEl(null);
                }}
                sx={{
                  minHeight: "5px",
                  color: "#707070",
                  fontSize: "10px",
                  fontWeight: 400,
                  py: 0,
                  pl: "54px",
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default CategoryFilter;
