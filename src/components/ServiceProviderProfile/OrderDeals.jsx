import styled from "@emotion/styled";
import { Box, Toolbar, Typography, Rating, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledButton = styled(NavLink)(({ theme }) => ({
  display: "grid",
  placeContent: "center",
  color: "#0e112b",
  fontSize: "0.5rem",
  fontWeight: 700,
  letterSpacing: "-0.02rem",
  textAlign: "center",
  width: "7.1875rem",
  height: "1.8125rem",
  textDecoration: "none",
  textTransform: "uppercase",

  "&.active": {
    background: "#f9f9f9",
    borderRadius: "3.125rem",
    boxShadow: "0.3125rem 0.125rem 0.1875rem rgba(0, 0, 0, 0.16)",
  },
}));

const OrderDeals = () => {
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
          width: "21.5625rem",
          height: "2.1875rem",
          borderRadius: "1.25rem",
          bgcolor: "#e8e8e8",
        }}
      >
        <StyledButton to={"/hj"}>Pending Orders</StyledButton>
        <StyledButton to={""}>Accepted Orders</StyledButton>
        <StyledButton to={"/adsbb"}>Done Orders</StyledButton>
      </Box>
      {/* Order Deals NavBar End */}

      {/* Logo Design Start*/}
      <Box sx={{ bgcolor: "#e6e6e5", mt: "1.375rem", pb: ".7rem" }}>
        <Toolbar sx={{ minHeight: "2rem" }}>
          <Typography
            flexGrow={1}
            sx={{
              color: "#242254",
              fontWeight: 500,
              letterSpacing: "0.0325rem",
              fontSize: "0.8125rem",
              fontStyle: "italic",
            }}
          >
            Logo Design
          </Typography>
        </Toolbar>

        <Box sx={{ ml: 2, mr: 2.5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: "3.1875rem",
                maxWidth: "3.1875rem",
                minWidth: "3.1875rem",
                border: "0.125rem solid #e2209e",
                borderRadius: "50%",
                bgcolor: "#f9f9f9",
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
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.0275rem",
                  }}
                >
                  John Mufambi
                </Typography>

                <Typography
                  sx={{
                    color: "#434254",
                    fontSize: "0.4375rem",
                    letterSpacing: "0.0175rem",
                    fontStyle: "italic",
                  }}
                >
                  <Box component={"span"}>11:43 </Box>
                  <Box component={"span"}>Mon 15 May 2023</Box>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#434254",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.0225rem",
                    fontStyle: "italic",
                    lineHeight: "0.6875rem",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  aspernatur.
                </Typography>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                      color: "#e6e6e5",
                      fontSize: "7px",
                      fontWeight: 500,
                      letterSpacing: "-0.28px",
                      width: "77px",
                      height: "15px",
                      borderRadius: "12px",
                      bgcolor: "#dc1f8a",
                      textTransform: "capitalize",
                    }}
                  >
                    Accept Order
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      padding: 0,
                      color: "#e6e6e5",
                      fontSize: "7px",
                      fontWeight: 500,
                      letterSpacing: "-0.28px",
                      width: "77px",
                      height: "15px",
                      borderRadius: "12px",
                      bgcolor: "#dc1f8a",
                      textTransform: "capitalize",
                    }}
                  >
                    Deny Order
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Logo Design End*/}

      {/* Logo Design Start*/}
      <Box sx={{ bgcolor: "#e6e6e5", mt: "1.375rem", pb: ".7rem" }}>
        <Toolbar sx={{ minHeight: "2rem" }}>
          <Typography
            flexGrow={1}
            sx={{
              color: "#242254",
              fontWeight: 500,
              letterSpacing: "0.0325rem",
              fontSize: "0.8125rem",
              fontStyle: "italic",
            }}
          >
            Flyer Design
          </Typography>
        </Toolbar>

        <Box sx={{ ml: 2, mr: 2.5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: "3.1875rem",
                maxWidth: "3.1875rem",
                minWidth: "3.1875rem",
                border: "0.125rem solid #e2209e",
                borderRadius: "50%",
                bgcolor: "#f9f9f9",
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
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.0275rem",
                  }}
                >
                  Mark Chitsa
                </Typography>

                <Typography
                  sx={{
                    color: "#434254",
                    fontSize: "0.4375rem",
                    letterSpacing: "0.0175rem",
                    fontStyle: "italic",
                  }}
                >
                  <Box component={"span"}>07:33 </Box>
                  <Box component={"span"}>Wed 29 Nov 2022</Box>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#434254",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.0225rem",
                    fontStyle: "italic",
                    lineHeight: "0.6875rem",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque fugit impedit quos reiciendis.
                </Typography>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                      color: "#e6e6e5",
                      fontSize: "7px",
                      fontWeight: 500,
                      letterSpacing: "-0.28px",
                      width: "77px",
                      height: "15px",
                      borderRadius: "12px",
                      bgcolor: "#dc1f8a",
                      textTransform: "capitalize",
                    }}
                  >
                    Upload Work
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      padding: 0,
                      color: "#e6e6e5",
                      fontSize: "7px",
                      fontWeight: 500,
                      letterSpacing: "-0.28px",
                      width: "77px",
                      height: "15px",
                      borderRadius: "12px",
                      bgcolor: "#dc1f8a",
                      textTransform: "capitalize",
                    }}
                  >
                    Chat
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Flyer Design End*/}

      {/* Review Section Start*/}
      <Box sx={{ bgcolor: "#e6e6e5", mt: "1.375rem", pb: ".7rem" }}>
        <Toolbar sx={{ minHeight: "2rem" }}>
          <Typography
            flexGrow={1}
            sx={{
              color: "#242254",
              fontWeight: 500,
              letterSpacing: "0.0325rem",
              fontSize: "0.8125rem",
              fontStyle: "italic",
            }}
          >
            Review
          </Typography>
        </Toolbar>

        <Box sx={{ ml: 2, mr: 2.5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: "3.1875rem",
                maxWidth: "3.1875rem",
                minWidth: "3.1875rem",
                border: "0.125rem solid #e2209e",
                borderRadius: "50%",
                bgcolor: "#f9f9f9",
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
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.0275rem",
                  }}
                >
                  John Mufambi
                </Typography>

                <Typography
                  sx={{
                    color: "#434254",
                    fontSize: "0.4375rem",
                    letterSpacing: "0.0175rem",
                    fontStyle: "italic",
                  }}
                >
                  <Box component={"span"}>19:13 </Box>
                  <Box component={"span"}>Sat 12 June 2023</Box>
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#434254",
                  fontSize: "0.5625rem",
                  letterSpacing: "0.0225rem",
                  fontStyle: "italic",
                  textAlign: "justify",
                  lineHeight: "0.6875rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                reprehenderit odio assumenda alias nostrum totam, explicabo
                molestias suscipit dolor ad esse laudantium?
              </Typography>

              <Rating
                defaultValue={4.5}
                precision={0.5}
                readOnly
                sx={{ fontSize: ".85rem", color: "#e2209e" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Review Section End*/}
    </Box>
  );
};

export default OrderDeals;
