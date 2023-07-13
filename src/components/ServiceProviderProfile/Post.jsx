import { ArrowBackIosNew } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";

function Post() {
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Box
        sx={{ display: "inline-flex", alignItems: "center", padding: "0 1rem" }}
      >
        <IconButton>
          <ArrowBackIosNew sx={{ color: "spIconsColor.main" }} />
        </IconButton>
        <Typography
          sx={{
            color: "#777683",
            fontWeight: 500,
            letterSpacing: { mobile: "−0.030625rem" },
            fontSize: { mobile: "1rem" },
          }}
        >
          All Posts
        </Typography>
      </Box>

      <Grid container>
        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>

        <Grid item mobile={12} tablet={6} laptop={4} largeDesktop={3}>
          <Box
            sx={{
              height: "20.1875rem",
              bgcolor: "spPostCardBg.main",
              overflow: "hidden",
              borderRadius: "4rem",
              margin: "1rem auto",
              width: { mobile: "21.5625rem" },
              height: { mobile: "20.1875rem" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "0rem",
                width: "100%",
                background: `#00000050`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: { mobile: "16.25rem" },
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
                letterSpacing: { mobile: "-0.03rem" },
                fontSize: { mobile: "0.75rem" },
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
                lineHeight: { mobile: "0.875rem" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium quaerat minus?
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Post;
