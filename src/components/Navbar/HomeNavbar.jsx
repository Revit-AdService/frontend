import { Close, Search, ShoppingCart } from "@mui/icons-material";
import { Box, IconButton, Input, Stack, Tooltip } from "@mui/material";
import BasicMenu from "../Home/CategoryMenu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeNavbar() {
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

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
    <Stack
      component={"form"}
      onSubmit={handleSubmit}
      direction="row"
      spacing={0.25}
    >
      <Tooltip title="Cart">
        <IconButton size="large" aria-label="cart">
          <ShoppingCart color="primary" sx={{ fontSize: "22px" }} />
        </IconButton>
      </Tooltip>
      <BasicMenu />

      {width < 600 ? (
        <>
          {" "}
          <Box
            className="search"
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5em",
              cursor: "pointer",
              zIndex: "10",
            }}
          >
            <Box component={"span"} className="icon">
              {isActive ? (
                <Close color="primary" onClick={() => setIsActive(false)} />
              ) : (
                <Search color="primary" onClick={() => setIsActive(true)} />
              )}
            </Box>
          </Box>
          <Box
            className={`searchBox ${isActive ? "active" : ""}`}
            sx={{
              position: "absolute",
              right: "-100%",
              width: "100%",
              height: "100%",
              display: "flex",
              background: "#ffffffd0",
              alignItems: "center",
              padding: "0 30px",
              transition: "1s ease-in-out",
              "&.active": {
                right: "0",
              },
            }}
          >
            <Input
              disableUnderline
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search here . . . "
              sx={{
                fontSize: "12px",
                width: "100%",
                height: 50,
                color: "#333",
              }}
            />
          </Box>
        </>
      ) : (
        ""
      )}
    </Stack>
  );
}

export default HomeNavbar;
