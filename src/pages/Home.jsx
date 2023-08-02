import { Box, Button, Fab, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Chat, Close } from "@mui/icons-material";
import Banner from "../components/Home/Banner";
import Posts from "../components/Posts";
import SearchBar from "../components/Home/SearchBar";
import MainContext from "../context/mainContext";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [selected, setSelected] = useState("top rated");
  const [selectedCategory, setSelectedCategory] = useState(null);

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
          <SearchBar onSelect={(category) => setSelectedCategory(category)} />
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

      {selectedCategory && (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "7px 6px 15px rgba(0, 0, 0, 0.16)",
            mx: "auto",
            my: 1,
            py: 0,
            bgcolor: "#e8e8e8",
            borderRadius: { mobile: "12px" },
            width: {
              mobile: `${String(selectedCategory.length) * 6}px`,
              tablet: `${String(selectedCategory.length) * 9.2}px`,
            },
            height: { mobile: "18px", mobile: "26px" },
          }}
        >
          {console.log(`${String(selectedCategory.length) * 9.2}px`)}
          <Typography
            sx={{
              fontWeight: { mobile: 700, tablet: 600 },
              textTransform: "uppercase",
              color: "#242254",
              fontSize: { mobile: "5px", tablet: "9px" },
              mt: { mobile: 0.3, tablet: 0 },
              cursor: "default",
            }}
          >
            {selectedCategory}
          </Typography>

          <Close
            onClick={() => setSelectedCategory(null)}
            sx={{
              color: "#242254",
              fontSize: "10px",
              position: "absolute",
              right: { mobile: String(selectedCategory.length) - 5 },
            }}
          />
        </Box>
      )}

      <Posts />
      {/* <Fab
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
      </Fab> */}
    </Box>
  );
};

export default Home;
