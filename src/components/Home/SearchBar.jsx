import { IconButton, Input, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
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
    <Paper
      mx={"auto"}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        // bgcolor:'green',
        border: "2px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        width: "320px",
      }}
    >
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        disableUnderline
        sx={{ width: "255px", fontSize: "12px", fontWeight: 500 }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#e2209e" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
