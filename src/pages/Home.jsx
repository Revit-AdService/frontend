import { Box, Fab } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Chat } from "@mui/icons-material";
import Banner from "../components/Home/Banner";
import Posts from "../components/Posts";
import SearchBar from "../components/Home/SearchBar";
import MainContext from "../context/mainContext";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const { posts } = useContext(MainContext);

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
      }}
    >
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

      <Posts posts={posts.posts} />
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
