import { Add, Delete, Edit, ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Rating,
  Stack,
  Fab,
  CircularProgress,
} from "@mui/material";
import postbg from "../../assets/images/ServiceProviderProfile/post.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context/mainContext";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import PostCard from "../ServiceProviderProfile/PostCard";

const Landing = () => {
  const { profile_id } = useParams();
  const navigate = useNavigate();
  //   const { userData, userPosts } = useContext(MainContext);
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchFromAPI(`authors/${profile_id}`).then((response) => {
      setUserData(response);
    });

    fetchFromAPI(`posts?author.id=${profile_id}`).then((response) => {
      setPosts(response);
    });
  }, [profile_id]);
  if (!userData || !posts)
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "400px",
        }}
      >
        <CircularProgress sx={{ color: "spDeleteBtn.main" }} />
      </Box>
    );
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: { mobile: "column", laptop: "row" },
        pb: 3,
      }}
    >
      {/* Left Start */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { laptop: "50%" },
        }}
      >
        {/* Bio Section */}
        <Box
          sx={{
            bgcolor: "spCardBg.main",
            overflow: "hidden",
            borderRadius: { laptop: "4.375rem" },
            width: { laptop: "33.125rem" },
            minHeight: {
              mobile: "9rem",
              tablet: "18.75rem",
              laptop: "22.1875rem",
            },
            mt: {
              mobile: "1.375rem",
              tablet: "2.875rem",
            },
          }}
        >
          <Toolbar sx={{ minHeight: "2rem" }}>
            <Typography
              flexGrow={1}
              sx={{
                color: "spHeading1.main",
                fontStyle: "Italic",
                fontWeight: 500,
                letterSpacing: "0.0325rem",
                padding: { laptop: "1.5rem 3rem 0.3rem 3rem" },
                fontSize: {
                  mobile: "0.8125rem",
                  tablet: "1.5rem",
                  laptop: "1.375rem",
                },
              }}
            >
              Bio
            </Typography>
          </Toolbar>

          <Typography
            sx={{
              color: "spText.main",
              fontStyle: "Italic",
              textAlign: "Justify",
              padding: { mobile: "1.125rem", laptop: "0.75rem 3.75rem" },
              pb: { laptop: "3rem" },
              letterSpacing: { laptop: "−0.04625rem" },
              lineHeight: { laptop: "1.91rem" },
              fontSize: {
                mobile: "0.5625rem",
                tablet: "1rem",
                laptop: "1.125rem",
              },
            }}
          >
            {userData.bio}
          </Typography>
        </Box>

        {/* Qualifications Section */}
        <Box
          sx={{
            bgcolor: "spCardBg.main",
            borderRadius: { laptop: "4.3125rem" },
            width: { mobile: "100%", laptop: "33.125rem" },
            height: {
              mobile: "9rem",
              tablet: "13.5rem",
              laptop: "18.75rem",
            },
            mt: {
              mobile: "1.375rem",
              tablet: "2.875rem",
            },
          }}
        >
          <Toolbar sx={{ minHeight: "2rem" }}>
            <Typography
              flexGrow={1}
              sx={{
                color: "spHeading1.main",
                fontStyle: "Italic",
                fontWeight: 500,
                letterSpacing: "0.0325rem",
                padding: { laptop: "1.5rem 3rem 0.3rem 3rem" },
                fontSize: {
                  mobile: "0.8125rem",
                  tablet: "1.5rem",
                  laptop: "1.375rem",
                },
              }}
            >
              Qualifications
            </Typography>
          </Toolbar>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              mt: { mobile: 1.25, laptop: "2rem" },
              ml: { laptop: "2rem" },
              mr: { laptop: "2rem" },
            }}
          >
            <Box
              elevation={1}
              sx={{
                display: { laptop: "flex" },
                flexDirection: { laptop: "column" },
                justifyContent: { laptop: "center" },
                // gap: { laptop: 0.5 },
                position: "relative",
                minWidth: "17.5rem",
                flexDirection: "column",
                borderRadius: "0.625rem",
                padding: "0.8125rem 1.375rem",
                bgcolor: "spQualificationsCardBg.main",
                height: { laptop: "8.625rem" },
                ml: {
                  mobile: "0.5rem",
                  tablet: "1.5rem",
                },
                mr: {
                  mobile: "0.5rem",
                  tablet: "1.5rem",
                },
              }}
            >
              <Typography
                sx={{
                  color: "spText.main",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "-0.035rem",
                }}
              >
                Bachelors of Science Honors Software Engineering
              </Typography>

              <Typography
                sx={{
                  color: "spText.main",
                  fontSize: "0.5625rem",
                  letterSpacing: "-0.0225rem",
                  fontStyle: "italic",
                }}
              >
                University of Zimbabwe
              </Typography>

              <Typography
                sx={{
                  color: "spText.main",
                  fontSize: "0.5625rem",
                  letterSpacing: "-0.0225rem",
                  fontStyle: "italic",
                }}
              >
                2022
              </Typography>

              <Button
                startIcon={<Delete sx={{ width: "1rem", mr: -1 }} />}
                sx={{
                  color: "spDeleteBtn.main",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.03rem",
                  fontStyle: "italic",
                  textTransform: "capitalize",
                  position: "absolute",
                  right: ".7rem",
                  bottom: ".7rem",
                  width: "4.2rem",
                  height: "1.25rem",
                }}
              >
                Delete
              </Button>
            </Box>

            <Box
              elevation={1}
              sx={{
                position: "relative",
                minWidth: "17.5rem",
                flexDirection: "column",
                borderRadius: "0.625rem",
                padding: "0.8125rem 1.375rem",
                bgcolor: "spQualificationsCardBg.main",
                height: { laptop: "8.625rem" },
                ml: {
                  mobile: "0.5rem",
                  tablet: "1.5rem",
                },
                mr: {
                  mobile: "0.5rem",
                  tablet: "1.5rem",
                },
              }}
            >
              <Typography
                sx={{
                  color: "spText.main",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "-0.035rem",
                }}
              >
                Bachelors of Software Engineering
              </Typography>

              <Typography
                sx={{
                  color: "spText.main",
                  fontSize: "0.5625rem",
                  letterSpacing: "-0.0225rem",
                  fontStyle: "italic",
                }}
              >
                University of Zimbabwe
              </Typography>

              <Typography
                sx={{
                  color: "spText.main",
                  fontSize: "0.5625rem",
                  letterSpacing: "-0.0225rem",
                  fontStyle: "italic",
                }}
              >
                2022
              </Typography>

              <Button
                startIcon={<Delete sx={{ width: "1rem", mr: -1 }} />}
                sx={{
                  color: "spDeleteBtn.main",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.03rem",
                  fontStyle: "italic",
                  textTransform: "capitalize",
                  position: "absolute",
                  right: ".7rem",
                  bottom: ".7rem",
                  width: "4.2rem",
                  height: "1.25rem",
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Review Section */}
        <Box
          sx={{
            bgcolor: "spCardBg.main",
            pb: ".7rem",
            borderRadius: { laptop: "4.3125rem" },
            width: { laptop: "33.125rem" },
            mt: {
              mobile: "1.375rem",
              tablet: "2.875rem",
            },
            height: { tablet: "14.375rem", laptop: "30rem" },
          }}
        >
          <Toolbar sx={{ minHeight: "2rem" }}>
            <Typography
              flexGrow={1}
              sx={{
                color: "spHeading1.main",
                fontStyle: "Italic",
                fontWeight: 500,
                letterSpacing: "0.0325rem",
                padding: { laptop: "1.5rem 3rem 1rem 3rem" },
                fontSize: {
                  mobile: "0.8125rem",
                  tablet: "1.5rem",
                  laptop: "1.375rem",
                },
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
                padding: { laptop: "0 2rem" },
              }}
            >
              <Box
                sx={{
                  maxWidth: "3.1875rem",
                  minWidth: "3.1875rem",
                  border: "0.125rem solid",
                  borderColor: "spProfilePicBorder.main",
                  borderRadius: "50%",
                  bgcolor: "spQualificationsCardBg.main",
                  height: {
                    mobile: "3.1875rem",
                    tablet: "6.5625rem",
                    laptop: "6.25rem",
                  },
                  minWidth: {
                    mobile: "3.1875rem",
                    tablet: "6.5625rem",
                    laptop: "6.25rem",
                  },
                  maxWidth: {
                    mobile: "3.1875rem",
                    tablet: "6.5625rem",
                    laptop: "6.25rem",
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
                      color: "spText.main",
                      fontWeight: 500,
                      letterSpacing: "0.0275rem",
                      fontSize: {
                        mobile: "0.6875rem",
                        tablet: "1.3125rem",
                        laptop: "1rem",
                      },
                    }}
                  >
                    John Mufambi
                  </Typography>

                  <Typography
                    sx={{
                      color: "spText.main",
                      letterSpacing: "0.0175rem",
                      fontStyle: "italic",
                      fontSize: {
                        mobile: "0.4375rem",
                        tablet: "0.8125rem",
                        laptop: "0.5rem",
                      },
                    }}
                  >
                    <Box component={"span"}>19:13 </Box>
                    <Box component={"span"}>Sat 12 June 2023</Box>
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "spText.main",
                    fontStyle: "italic",
                    textAlign: "justify",
                    pt: { laptop: ".5rem" },
                    width: { laptop: "90%" },
                    fontSize: {
                      mobile: "0.5625rem",
                      tablet: "1.0625rem",
                      laptop: "0.6875rem",
                    },
                    letterSpacing: {
                      mobile: "0.0225rem",
                      tablet: "-0.0425rem",
                      laptop: "−0.0275rem",
                    },
                    lineHeight: {
                      mobile: "0.6875rem",
                      tablet: "1.3125rem",
                      laptop: "0.875rem",
                    },
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
                  sx={{
                    color: "spIconsColor.main",
                    mt: { laptop: "0.5rem" },
                    fontSize: {
                      mobile: ".85rem",
                      tablet: "1.7rem",
                      laptop: "1rem",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Left End */}

      {/* Right Start */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: { laptop: "auto" },
          // height: { laptop: 1270 },
          width: { laptop: "50%" },
          height: { laptop: "1300px" },
          pt: { laptop: "2rem" },
        }}
      >
        {/* These are the posts */}
        <Stack
          gap={5}
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          // gap={10}
          my={5}
          px={{ desktop: 10, largeDesktop: 20 }}
        >
          {posts.map((item, id) => (
            <Box key={id}>
              <PostCard viewOnly={true} post={item} />
            </Box>
          ))}
        </Stack>
      </Box>
      {/* Right End */}

      <Fab
        variant="extended"
        color="primary"
        aria-label="custom order"
        sx={{
          fontSize: { mobile: "7px", tablet: "10px", desktop: "13px" },
          fontWeight: 500,
          m: 3,
          position: "fixed",
          float: "left",
          right: "0",
          bottom: "0",
          color: "#F9F9F9",
          backgroundColor: "spDeleteBtn.main",
          transition: "0.3s ease-in-out",
          textTransform: "capitalize",
          width: { mobile: "95px", tablet: "129px", desktop: "153px" },
          height: { mobile: "29px", tablet: "40px", desktop: "46px" },

          "&:hover": {
            backgroundColor: "chatBtn.main",
            // color: "#f9f9f9",
            // height: 33,
            // width: 100,
          },
        }}
      >
        <ShoppingCart
          sx={{
            ml: -1,
            mr: 0.5,
            fontSize: { mobile: "12px", tablet: "16px", desktop: "20px" },
          }}
        />
        Custom Order
      </Fab>
    </Box>
  );
};

export default Landing;
