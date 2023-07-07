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

const Landing = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pb: 3,
      }}
    >
      {/* Bio Section */}
      <Box
        sx={{
          height: {
            mobile: "9rem",
            tablet: "18.75rem",
          },
          bgcolor: "spCardBg.main",
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
              fontWeight: 500,
              letterSpacing: "0.0325rem",
              fontSize: {
                mobile: "0.8125rem",
                tablet: "1.5rem",
              },
              fontStyle: "italic",
            }}
          >
            Bio
          </Typography>

          <Edit
            sx={{
              color: "spIconsColor.main",
              width: {
                mobile: "1rem",
                tablet: "1.5rem",
              },
            }}
          />
        </Toolbar>

        <Typography
          sx={{
            color: "spText.main",
            fontSize: {
              mobile: "0.5625rem",
              tablet: "1rem",
            },
            fontStyle: "Italic",
            textAlign: "Justify",
            p: "1.125rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste,
          illum, obcaecati neque eius fugiat voluptatum modi alias labore
          debitis veritatis. Optio omnis, pariatur libero aspernatur odio
          excepturi nostrum quos dolorem laudantium maiores!
        </Typography>
      </Box>

      {/* Qualifications Section */}
      <Box
        sx={{
          height: {
            mobile: "9rem",
            tablet: "13.5rem",
          },
          width: "100%",
          bgcolor: "spCardBg.main",
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
              fontWeight: 500,
              letterSpacing: "0.0325rem",
              fontSize: {
                "@media (min-width: 700px)": {
                  fontSize: "1.5rem",
                },
                mobile: "0.8125rem",
                tablet: "1.5rem",
              },
              fontStyle: "italic",
            }}
          >
            Qualifications
          </Typography>

          <Add
            variant={"filled"}
            sx={{
              color: "spIconsColor.main",
              width: {
                mobile: "1rem",
                tablet: "1.5rem",
              },
            }}
          />
        </Toolbar>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            mt: 1.25,
          }}
        >
          <Box
            elevation={1}
            sx={{
              position: "relative",
              minWidth: "17.5rem",
              flexDirection: "column",
              borderRadius: "0.625rem",
              padding: "0.8125rem 1.375rem",
              bgcolor: "spQualificationsCardBg.main",
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

          <Box
            sx={{
              position: "relative",
              // display: "inline-flex",
              minWidth: "17.5rem",
              flexDirection: "column",
              borderRadius: "0.625rem",
              padding: "0.8125rem 1.375rem",
              bgcolor: "spQualificationsCardBg.main",
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

          <Box
            sx={{
              position: "relative",
              // display: "inline-flex",
              minWidth: "17.5rem",
              flexDirection: "column",
              borderRadius: "0.625rem",
              padding: "0.8125rem 1.375rem",
              bgcolor: "spQualificationsCardBg.main",
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
          mt: {
            mobile: "1.375rem",
            tablet: "2.875rem",
          },
          pb: ".7rem",
          height: { tablet: "14.375rem" },
        }}
      >
        <Toolbar sx={{ minHeight: "2rem" }}>
          <Typography
            flexGrow={1}
            sx={{
              color: "spHeading1.main",
              fontWeight: 500,
              letterSpacing: "0.0325rem",
              fontSize: {
                mobile: "0.8125rem",
                tablet: "1.5rem",
              },
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
                border: "0.125rem solid",
                borderColor: "spProfilePicBorder.main",
                borderRadius: "50%",
                bgcolor: "spQualificationsCardBg.main",

                "@media (min-width: 700px)": {
                  height: "6.5625rem",
                  maxWidth: "6.5625rem",
                  minWidth: "6.5625rem",
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
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.0275rem",

                    "@media (min-width: 700px)": {
                      fontSize: "1.3125rem",
                    },
                  }}
                >
                  John Mufambi
                </Typography>

                <Typography
                  sx={{
                    color: "spText.main",
                    fontSize: "0.4375rem",
                    letterSpacing: "0.0175rem",
                    fontStyle: "italic",

                    "@media (min-width: 700px)": {
                      fontSize: "0.8125rem",
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
                  fontSize: "0.5625rem",
                  letterSpacing: "0.0225rem",
                  fontStyle: "italic",
                  textAlign: "justify",
                  lineHeight: "0.6875rem",

                  "@media (min-width: 700px)": {
                    fontSize: "1.0625rem",
                    letterSpacing: "-0.0425rem",
                    lineHeight: "1.3125rem",
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
                  fontSize: ".85rem",
                  color: "spIconsColor.main",

                  "@media (min-width: 700px)": {
                    fontSize: "1.7rem",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Add Post */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.3125rem",
          width: "21.5625rem",
          height: "5.4375rem",
          borderRadius: "2rem",
          bgcolor: "spCardBg.main",
          mt: "1.375rem",

          "@media (min-width: 700px)": {
            width: "41.5625rem",
            height: "10.4375rem",
          },
        }}
      >
        <Box
          sx={{
            height: "2.6875rem",
            width: "2.6875rem",
            bgcolor: "spQualificationsCardBg.main",
            borderRadius: "50%",

            "@media (min-width: 700px)": {
              width: "5.875rem",
              height: "5.875rem",
            },
          }}
        ></Box>

        <Box
          sx={{
            display: "grid",
            placeContent: "center",
            height: "2.6875rem",
            width: "14.75rem",
            bgcolor: "spQualificationsCardBg.main",
            borderRadius: "2.375rem",

            "@media (min-width: 700px)": {
              width: "28.5625rem",
              borderRadius: "4.75rem",
              height: "5.875rem",
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "spAddPostBtn.bg",
              width: "5.9375rem",
              height: "1.0625rem",
              borderRadius: "0.75rem",
              color: "spAddPostBtn.color",
              fontSize: "0.5rem",
              fontWeight: "500",
              letterSpacing: "-0.02rem",
              textTransform: "capitalize",

              "@media (min-width: 700px)": {
                width: "12.125rem",
                height: "2.125rem",
                borderRadius: "1.75rem",
                fontSize: "0.9375rem",
              },
            }}
          >
            Add Post
          </Button>
        </Box>
      </Box>

      {/* Posts */}
      <Divider sx={{ color: "#000", m: 2 }} />

      <Box
        sx={{
          height: "20.1875rem",
          width: "21.5625rem",
          bgcolor: "spPostCardBg.main",
          overflow: "hidden",
          borderRadius: "4rem",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "4rem",
            width: "100%",
            background: `url(${postbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "16.25rem",
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
              background: "linear-gradient(to bottom, #ffffff90, #e2209e90)",
            }}
          >
            $100.00
          </Box>
        </Box>

        <Typography
          align="center"
          sx={{
            color: "#f9f9f9",
            fontSize: "0.75rem",
            fontWeight: 500,
            fontStyle: "italic",
            letterSpacing: "-0.03rem",
          }}
        >
          Graphic Design and Logo Design
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "rgba(249, 249, 249, 0.79)",
            fontSize: "0.625rem",
            fontStyle: "italic",
            letterSpacing: "0.025625rem",
            lineHeight: "0.875rem",
            pl: 3,
            pr: 3,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          praesentium quaerat minus?
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
