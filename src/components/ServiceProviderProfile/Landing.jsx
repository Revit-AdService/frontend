import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Rating,
  Divider,
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
      <Box sx={{ height: "9rem", bgcolor: "#e6e6e5", mt: "1.375rem" }}>
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
            Bio
          </Typography>

          <Edit sx={{ color: "#dc1f8a", width: "1rem" }} />
        </Toolbar>

        <Typography
          sx={{
            color: "#434257",
            fontSize: "0.5625rem",
            letterSpacing: "0.02375rem",
            fontStyle: "Italic",
            textAlign: "Justify",
            lineHeight: "0.8475rem",
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
          height: "9rem",
          width: "100%",
          bgcolor: "#e6e6e5",
          mt: "1.375rem",
        }}
      >
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
            Qualifications
          </Typography>

          <Add variant={"filled"} sx={{ color: "#dc1f8a", width: "1rem" }} />
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
              // display: "inline-flex",
              minWidth: "17.5rem",
              flexDirection: "column",
              borderRadius: "0.625rem",
              padding: "0.8125rem 1.375rem",
              bgcolor: "#f9f9f9",
              ml: "0.5rem",
              mr: "0.5rem",
            }}
          >
            <Typography
              sx={{
                color: "#434254",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "-0.035rem",
              }}
            >
              Bachelors of Software Engineering
            </Typography>

            <Typography
              sx={{
                color: "#434254",
                fontSize: "0.5625rem",
                letterSpacing: "-0.0225rem",
                fontStyle: "italic",
              }}
            >
              University of Zimbabwe
            </Typography>

            <Typography
              sx={{
                color: "#434254",
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
                color: "#e2209e",
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
              bgcolor: "#f9f9f9",
              ml: "0.5rem",
              mr: "0.5rem",
            }}
          >
            <Typography
              sx={{
                color: "#434254",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "-0.035rem",
              }}
            >
              Bachelors of Software Engineering
            </Typography>

            <Typography
              sx={{
                color: "#434254",
                fontSize: "0.5625rem",
                letterSpacing: "-0.0225rem",
                fontStyle: "italic",
              }}
            >
              University of Zimbabwe
            </Typography>

            <Typography
              sx={{
                color: "#434254",
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
                color: "#e2209e",
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
          bgcolor: "#e6e6e5",
          mt: "1.375rem",
        }}
      >
        <Box
          sx={{
            height: "2.6875rem",
            width: "2.6875rem",
            bgcolor: "#f9f9f9",
            borderRadius: "50%",
          }}
        ></Box>

        <Box
          sx={{
            display: "grid",
            placeContent: "center",
            height: "2.6875rem",
            width: "14.75rem",
            bgcolor: "#f9f9f9",
            borderRadius: "2.375rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#dc1f8a",
              width: "5.9375rem",
              height: "1.0625rem",
              borderRadius: "0.75rem",
              color: "#e6e6e5",
              fontSize: "0.5rem",
              fontWeight: "500",
              letterSpacing: "-0.02rem",
              textTransform: "capitalize",
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
          bgcolor: "#e2209e",
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
