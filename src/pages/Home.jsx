import { Box, Fab, IconButton, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopRatedSection from "../components/Home/TopRatedSection";
import MoreServicesSection from "../components/Home/MoreServicesSection";
import { Chat, Search } from "@mui/icons-material";
import NavBar from "../utils/NavBar";
import Banner from "../components/Home/Banner";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Posts from "../components/Posts";
import SearchBar from "../components/Home/SearchBar";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchFromAPI("posts").then((res) => setPosts(res));
  }, []);

  console.log(posts);

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
    <Box
      sx={{
        position: "relative",
        // top: 60,
      }}
    >
      {/* <NavBar check={check} change={change} /> */}

      <Banner />

      {width >= 600 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            pt: 3,
          }}
        >
          <SearchBar />
        </Box>
      ) : (
        ""
      )}

      <Posts posts={posts} />
      <Fab
        sx={{
          m: 3,
          position: "fixed",
          float: "left",
          right: "0",
          bottom: "0",
          color: "#FFFFFF90",
          backgroundColor: "chatBtn.main",
          transition: "0.3s ease-in-out",

          "&:hover": {
            backgroundColor: "chatBtn.main",
            color: "#f9f9f9",
            height: 70,
            width: 70,
          },
        }}
        aria-label="chat"
      >
        <Chat />
      </Fab>
    </Box>
  );
};

export default Home;
