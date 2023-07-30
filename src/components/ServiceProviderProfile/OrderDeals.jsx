import { Chat } from "@mui/icons-material";
import { Box, Button, Stack, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import DealsCard from "./DealsCard";
import ReviewOrderCard from "./ReviewOrderCard";

const orderDeals = [
  { name: "Pending" },
  { name: "Accepted" },
  { name: "Done" },
];

const OrderDeals = () => {
  const { user_id } = useParams();
  const [selected, setSelected] = useState("Accepted");
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetchFromAPI(
      `orders?serviceProviderID=${user_id}&status=${selected.toLowerCase()}`
    ).then((data) => setOrders(data));
  }, [selected]);

  if (!orders) return "Loading orders...";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 5,
      }}
    >
      {/* Order Deals NavBar Start */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          borderRadius: "1.25rem",
          bgcolor: "#e8e8e8",
          width: {
            mobile: "21.5625rem",
            tablet: "44.3125rem",
            laptop: "708px",
            largeDesktop: "848px",
          },
          height: {
            mobile: "2.1875rem",
            tablet: "4.5rem",
            laptop: "72px",
            largeDesktop: "86px",
          },
        }}
      >
        {orderDeals.map((item, id) => (
          <Button
            key={id}
            onClick={() => setSelected(item.name)}
            sx={{
              background: item.name === selected && "#f9f9f9",
              borderRadius: "3.125rem",
              boxShadow:
                item.name === selected &&
                "0.3125rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.16)",
              color: "#0e112b",
              fontWeight: 700,
              textAlign: "center",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "ease-in-out 0.3s",
              letterSpacing: { mobile: "-0.02rem", tablet: "−0.0375rem" },
              fontSize: { mobile: "0.5rem", tablet: "0.9375rem" },
              width: { mobile: "7.1875rem", tablet: "14.6875rem" },
              height: { mobile: "1.8125rem", tablet: "3.5625rem" },

              ":hover": {
                background: item.name === selected && "#f9f9f9",
              },
            }}
          >
            {item.name} Deals
          </Button>
        ))}
      </Box>
      {/* Order Deals NavBar End */}

      <Stack direction={"column"} gap={2} mt="25px">
        {selected != "Done"
          ? orders.map((item, id) => (
              <Box key={id} sx={{ transition: "ease-in-out 0.5s" }}>
                <DealsCard item={item} />
              </Box>
            ))
          : orders.map((item, id) => (
              <Box key={id}>
                <ReviewOrderCard
                  item={item}
                  sx={{ transition: "ease-in-out 0.5s" }}
                />
              </Box>
            ))}
      </Stack>

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

export default OrderDeals;
