import { Box, Button, Fab } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Chat } from "@mui/icons-material";
import Banner from "../components/Home/Banner";
import Posts from "../components/Posts";
import SearchBar from "../components/Home/SearchBar";
import MainContext from "../context/mainContext";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [selected, setSelected] = useState("top rated");

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mt: "20px",
          bgcolor: "cardColor.main",
          // pr: "5px",
          borderRadius: {
            mobile: "20px",
            tablet: "38px",
            laptop: "43px",
            largeDesktop: "47px",
          },
          width: {
            mobile: "271px",
            tablet: "473px",
            laptop: "500px",
            largeDesktop: "581px",
          },
          height: {
            mobile: "41px",
            tablet: "61px",
            laptop: "67px",
            largeDesktop: "78px",
          },
        }}
      >
        {["top rated", "other"].map((item, id) => (
          <Button
            key={id}
            onClick={() => setSelected(item)}
            sx={{
              color: "utTitle.main",
              fontWeight: 700,
              bgcolor: selected === item && "backColor.main",
              boxShadow: selected === item && "5px 2px 3px rgba(0, 0, 0, 0.16)",
              transition: "ease-in-out 0.3s",
              fontSize: { mobile: "7px", tablet: "11px" },
              width: {
                mobile: "133px",
                tablet: "227px",
                laptop: "241px",
                largeDesktop: "283px",
              },
              height: {
                mobile: "32px",
                tablet: "47px",
                laptop: "53px",
                largeDesktop: "59px",
              },
              borderRadius: {
                mobile: "20px",
                tablet: "38px",
                laptop: "43px",
                largeDesktop: "47px",
              },

              ":hover": {
                bgcolor: selected === item && "backColor.main",
              },
            }}
          >
            {item} services
          </Button>
        ))}
      </Box>

      <Posts />
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
