import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Typography } from "@mui/material";
import Posts from "../components/Posts";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchFromAPI(`posts?q=${searchTerm}`).then((res) => setPosts(res));
  }, [searchTerm]);

  return (
    <Box>
      <Typography>Search results for: {searchTerm}</Typography>

      <Posts posts={posts} />
    </Box>
  );
};

export default SearchFeed;
