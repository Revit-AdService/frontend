import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Rating,
  Divider,
  Container,
} from "@mui/material";
import postbg from "../../assets/images/ServiceProviderProfile/post.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: { mobile: "column", laptop: "row" },
        // justifyContent: "center",
        // alignItems: "center",
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
            height: {
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

            <Edit
              sx={{
                color: "spIconsColor.main",
                cursor: "pointer",
                marginRight: { laptop: "3rem" },
                marginTop: { laptop: "1rem" },
                width: {
                  mobile: "1rem",
                  tablet: "1.5rem",
                  laptop: "1.25rem",
                },
              }}
            />
          </Toolbar>

          <Typography
            sx={{
              color: "spText.main",
              fontStyle: "Italic",
              textAlign: "Justify",
              padding: { mobile: "1.125rem", laptop: "0.75rem 3.75rem" },
              letterSpacing: { laptop: "−0.04625rem" },
              lineHeight: { laptop: "1.91rem" },
              fontSize: {
                mobile: "0.5625rem",
                tablet: "1rem",
                laptop: "1.125rem",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste,
            illum, obcaecati neque eius fugiat voluptatum modi alias labore
            debitis veritatis. Optio omnis, pariatur libero aspernatur odio
            excepturi nostrum quos dolorem laudantium maiores!Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
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

            <Add
              variant={"filled"}
              sx={{
                color: "spIconsColor.main",
                cursor: "pointer",
                marginRight: { laptop: "3rem" },
                marginTop: { laptop: "1rem" },
                width: {
                  mobile: "1rem",
                  tablet: "1.5rem",
                  laptop: "1.25rem",
                },
              }}
            />
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
          pt: { laptop: "2rem" },
        }}
      >
        {/* Add Post */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.3125rem",
            borderRadius: "2rem",
            bgcolor: "spCardBg.main",
            mt: "1.375rem",
            width: {
              mobile: "21.5625rem",
              tablet: "41.5625rem",
              laptop: "35rem",
            },
            height: {
              mobile: "5.4375rem",
              tablet: "10.4375rem",
              laptop: "7.5rem",
            },
          }}
        >
          <Box
            sx={{
              bgcolor: "spQualificationsCardBg.main",
              borderRadius: "50%",
              height: {
                mobile: "2.6875rem",
                tablet: "5.875rem",
                laptop: "4rem",
              },
              width: {
                mobile: "2.6875rem",
                tablet: "5.875rem",
                laptop: "4rem",
              },
            }}
          ></Box>

          <Box
            sx={{
              display: "grid",
              placeContent: "center",
              bgcolor: "spQualificationsCardBg.main",
              borderRadius: {
                mobile: "2.375rem",
                tablet: "4.75rem",
                laptop: "3.5rem",
              },
              height: {
                mobile: "2.6875rem",
                tablet: "5.875rem",
                laptop: "4rem",
              },
              width: {
                mobile: "14.75rem",
                tablet: "28.5625rem",
                laptop: "21rem",
              },
            }}
          >
            <Link to={"/profile/create-post"}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "spAddPostBtn.bg",
                  color: "spAddPostBtn.color",
                  fontWeight: "500",
                  letterSpacing: "-0.02rem",
                  textTransform: "capitalize",
                  borderRadius: { mobile: "0.75rem", tablet: "1.75rem" },
                  fontSize: { mobile: "0.5rem", tablet: "0.9375rem" },
                  width: { mobile: "5.9375rem", tablet: "12.125rem" },
                  height: { mobile: "1.0625rem", tablet: "2.125rem" },
                }}
              >
                Add Post
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Posts */}
        <Divider sx={{ color: "#000", m: 2 }} />

        {/* These are the posts */}
        <Box>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              width: { mobile: "21.5625rem", laptop: "35rem" },
              height: { mobile: "20.1875rem", laptop: "35rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050 url(${postbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem", laptop: "25rem" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  display: "grid",
                  placeContent: "center",
                  bottom: 20,
                  right: 20,
                  width: "7.1875rem",
                  height: "1.6875rem",
                  borderRadius: "1.5625rem",
                  color: "#0e112b",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "-0.025rem",
                  background:
                    "linear-gradient(to bottom, #ffffff90, #e2209e90)",
                }}
              >
                $100.00
              </Box>
            </Box>

            <Typography
              align="center"
              sx={{
                color: "#f9f9f9",
                fontWeight: 500,
                fontStyle: "italic",
                margin: { laptop: "0.3rem 0" },
                letterSpacing: { mobile: "-0.03rem", laptop: "−0.0475rem" },
                fontSize: { mobile: "0.75rem", laptop: "1.1875rem" },
              }}
            >
              Graphic Design and Logo Design
            </Typography>

            <Typography
              align="center"
              sx={{
                color: "rgba(249, 249, 249, 0.79)",
                fontStyle: "italic",
                lineHeight: "0.875rem",
                pl: 3,
                pr: 3,
                fontSize: { mobile: "0.625rem" },
                letterSpacing: { mobile: "0.025625rem" },
                lineHeight: { mobile: "0.875rem", laptop: "0.8125rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Right End */}
    </Box>
  );
};

export default Landing;
