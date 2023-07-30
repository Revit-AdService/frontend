import { Avatar, Box, Rating, Toolbar, Typography } from "@mui/material";
import { formatDate } from "../../utils/contants";

const ReviewOrderCard = ({
  item: { product, orderDate, rating, review, client },
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#e6e6e5",
        mt: "1.375rem",
        p: { largeDesktop: "1rem" },
        pb: ".7rem",
        borderRadius: { laptop: "62px", largeDesktop: "67px" },
        width: {
          mobile: "100%",
          laptop: "926px",
          largeDesktop: "1108px",
        },
        minHeight: {
          tablet: "14.375rem",
          laptop: "230px",
          largeDesktop: "274px",
        },
      }}
    >
      <Toolbar sx={{ minHeight: "2rem", padding: { tablet: "1rem 2rem" } }}>
        <Typography
          flexGrow={1}
          sx={{
            color: "#242254",
            fontWeight: 500,
            fontStyle: "italic",
            letterSpacing: {
              mobile: "0.0325rem",
              tablet: "−0.07rem",
              largeDesktop: "-1.28px",
            },
            fontSize: {
              mobile: "0.8125rem",
              tablet: "1.75rem",
              largeDesktop: "32px",
            },
          }}
        >
          {product}
        </Typography>
      </Toolbar>

      <Box
        sx={{
          ml: { mobile: 2, tablet: 4 },
          mr: { mobile: 2.5, tablet: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            src={client.avatar}
            alt={client.name}
            sx={{
              border: {
                mobile: "0.125rem solid #e2209e",
                largeDesktop: "0.125rem solid #e2209e",
              },
              height: {
                mobile: "3.1875rem",
                tablet: "6.5625rem",
                largeDesktop: "125px",
              },
              maxWidth: {
                mobile: "3.1875rem",
                tablet: "6.5625rem",
                largeDesktop: "125px",
              },
              minWidth: {
                mobile: "3.1875rem",
                tablet: "6.5625rem",
                largeDesktop: "125px",
              },
            }}
          />

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#434254",
                  fontWeight: 500,
                  letterSpacing: {
                    mobile: "0.0275rem",
                    tablet: "−0.0525rem",
                    largeDesktop: "-0.96px",
                  },
                  fontSize: {
                    mobile: "0.6875rem",
                    tablet: "1.3125rem",
                    largeDesktop: "24px",
                  },
                }}
              >
                {client.name}
              </Typography>

              <Typography
                sx={{
                  color: "#434254",
                  fontStyle: "italic",
                  mr: { largeDesktop: "4rem" },
                  letterSpacing: {
                    mobile: "0.0175rem",
                    tablet: "−0.0325rem",
                    largeDesktop: "-0.56px",
                  },
                  fontSize: {
                    mobile: "0.4375rem",
                    tablet: "0.8125rem",
                    largeDesktop: "14px",
                  },
                }}
              >
                <Box component={"span"}>11:43 </Box>
                <Box component={"span"}>{formatDate(orderDate)}</Box>
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#434254",
                fontStyle: "italic",
                lineHeight: {
                  mobile: "0.6875rem",
                  tablet: "1.3125rem",
                  largeDesktop: "23px",
                },
                letterSpacing: {
                  mobile: "0.0225rem",
                  tablet: "−0.0425rem",
                  largeDesktop: "-0.76px",
                },
                fontSize: {
                  mobile: "0.5625rem",
                  tablet: "1.0625rem",
                  largeDesktop: "19px",
                },
                width: "75%",
              }}
            >
              {review}
            </Typography>
            <Rating
              value={parseFloat(rating)}
              precision={0.5}
              readOnly
              sx={{
                fontSize: {
                  mobile: ".85rem",
                  tablet: "1.5rem",
                  largeDesktop: "2rem",
                },
                color: "#e2209e",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewOrderCard;
