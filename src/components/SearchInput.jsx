import { Search } from "@mui/icons-material";
import React from "react";

const SearchInput = () => {
  return (
    <div className="search">
      <Search className="search__icon"/>
      <input type="text" placeholder='search' name="search_input" id="search__input" />
    </div>
  );
};

export default SearchInput;
