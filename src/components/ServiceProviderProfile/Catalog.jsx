import { MoreVert } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";

const Catalog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 5,
      }}
    >
      {/* Add Catalog */}
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
            Add Catalog
          </Button>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ mt: 5, mb: 5 }} />

      {/* Posts */}
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
            // background: `url(${postbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "16.25rem",
          }}
        >
          <MoreVert
            sx={{ color: "#f9f9f9", position: "absolute", right: 25, top: 25 }}
          />

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

export default Catalog;
