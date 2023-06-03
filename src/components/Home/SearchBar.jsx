import React from "react";
import { Box, Input } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Box align="center">
      <Input placeholder="Search here..." />
      <Search />
    </Box>
  );
};

export default SearchBar;
