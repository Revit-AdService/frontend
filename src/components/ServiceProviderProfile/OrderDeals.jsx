import styled from "@emotion/styled";
import { Chat } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  Typography,
  Rating,
  Button,
  Stack,
  Fab,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledButton = styled(NavLink)(({ theme }) => ({
  display: "grid",
  placeContent: "center",
  color: "#0e112b",
  fontWeight: 700,
  textAlign: "center",
  textDecoration: "none",
  textTransform: "uppercase",
  // letterSpacing: { mobile: "-0.02rem", tablet: "−0.0375rem" },
  // fontSize: { mobile: "0.5rem", tablet: "0.9375rem" },
  // width: { mobile: "7.1875rem", tablet: "14.6875rem" },
  // height: { mobile: "1.8125rem", tablet: "3.5625rem" },

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
      {/* <Box
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
        <StyledButton to={"/hj"}>Pending Orders</StyledButton>
        <StyledButton to={""}>Accepted Orders</StyledButton>
        <StyledButton to={"/adsbb"}>Done Orders</StyledButton>
      </Box> */}
      {/* Order Deals NavBar End */}

      <Stack direction={"column"} gap={2} mt="25px">
        {/* Logo Design Start*/}
        <Box
          sx={{
            bgcolor: "#e6e6e5",
            mt: "1.375rem",
            p: { largeDesktop: "1rem" },
            pb: ".7rem",
            borderRadius: { laptop: "62px", largeDesktop: "67px" },
            width: { mobile: "100%", laptop: "926px", largeDesktop: "1108px" },
            height: {
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
              Logo Design
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
              <Box
                sx={{
                  border: {
                    mobile: "0.125rem solid #e2209e",
                    largeDesktop: "2px solid #e2209e",
                  },
                  borderRadius: "50%",
                  bgcolor: "#f9f9f9",
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
                    John Mufambi
                  </Typography>

                  <Typography
                    sx={{
                      color: "#434254",
                      fontStyle: "italic",
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
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, aspernatur.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { mobile: "0.25rem", tablet: "0.5rem" },
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        color: "#e6e6e5",
                        fontWeight: 500,
                        bgcolor: "#dc1f8a",
                        textTransform: "capitalize",
                        borderRadius: {
                          mobile: "0.75rem",
                          largeDesktop: "12px",
                        },

                        fontSize: {
                          mobile: "0.4375rem",
                          tablet: "0.8125rem",
                          largeDesktop: "14px",
                        },
                        height: {
                          mobile: "0.9375rem",
                          tablet: "1.8125rem",
                          largeDesktop: "35px",
                        },
                        width: {
                          mobile: "4.8125rem",
                          tablet: "9.8125rem",
                          largeDesktop: "188px",
                        },
                      }}
                    >
                      Accept Order
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        color: "#e6e6e5",
                        fontWeight: 500,
                        bgcolor: "#dc1f8a",
                        textTransform: "capitalize",
                        borderRadius: {
                          mobile: "0.75rem",
                          largeDesktop: "12px",
                        },

                        fontSize: {
                          mobile: "0.4375rem",
                          tablet: "0.8125rem",
                          largeDesktop: "14px",
                        },
                        height: {
                          mobile: "0.9375rem",
                          tablet: "1.8125rem",
                          largeDesktop: "35px",
                        },
                        width: {
                          mobile: "4.8125rem",
                          tablet: "9.8125rem",
                          largeDesktop: "188px",
                        },
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

        {/* Review Section Start*/}
        <Box
          sx={{
            bgcolor: "#e6e6e5",
            mt: "1.375rem",
            p: { largeDesktop: "1rem" },
            pb: ".7rem",
            borderRadius: { laptop: "62px", largeDesktop: "67px" },
            width: { mobile: "100%", laptop: "926px", largeDesktop: "1108px" },
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
              Review
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
              <Box
                sx={{
                  border: {
                    mobile: "0.125rem solid #e2209e",
                    largeDesktop: "0.125rem solid #e2209e",
                  },
                  borderRadius: "50%",
                  bgcolor: "#f9f9f9",
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
                    John Mufambi
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
                    <Box component={"span"}>Mon 15 May 2023</Box>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  aspernatur dolor sit amet consectetur adipisicing elit. Vero,
                  aspernatur dolor sit amet consectetur adipisicing elit.
                </Typography>

                <Rating
                  defaultValue={4.5}
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
        {/* Review Section End*/}
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
