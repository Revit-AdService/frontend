import { IconButton, Input, Paper, Stack } from "@mui/material";
import {
  Filter,
  Filter1,
  Filter2,
  FilterAlt,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Stack mx={"auto"} direction="row" alignItems="center" gap={1}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          bgcolor: "#e8e8e8",
          pl: 2,
          boxShadow: "none",
          borderRadius: { tablet: "18px", largeDesktop: "31px" },
          width: { tablet: "435px", laptop: "503px" },
          height: { tablet: "43px", laptop: "51px" },
        }}
      >
        <IconButton type="submit" sx={{ p: "10px", color: "#999" }}>
          <Search />
        </IconButton>
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          disableUnderline
          sx={{ width: { tablet: "365px" }, fontSize: "12px", fontWeight: 500 }}
        />
      </Paper>

      <FilterAlt sx={{ color: "#e2209e" }} />
    </Stack>
  );
};

export default SearchBar;
