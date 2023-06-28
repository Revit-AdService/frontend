import styled from "@emotion/styled";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Input, Toolbar, Typography } from "@mui/material";

const StyledInput = styled(Input)(({ theme }) => ({
  fontSize: "0.625rem",
  letterSpacing: "−0.025rem",
  backgroundColor: "#ffffff",
  width: "11.1875rem",
  height: "1.8125rem",
  padding: "0 1rem",
  borderRadius: "1.1875rem",
}));

const PersonalInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pb: 5,
      }}
    >
      {/* Bio Section Start */}
      <Box sx={{ height: "13.3125rem", bgcolor: "#e6e6e5", mt: "1.375rem" }}>
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
      {/* Bio Section End */}

      {/* Qualifications Section Start */}
      <Box
        sx={{
          width: "100%",
          minHeight: "27.3125rem",
          bgcolor: "#e6e6e5",
          mt: "1.375rem",
          pb: "2rem",
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
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            mt: "1rem",
            width: "100%",
            height: "11rem",
            bgcolor: "#f9f9f9",
            p: "0.875rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100%",
              gap: "0.3125rem",
            }}
          >
            <StyledInput placeholder="Name of Certificate" disableUnderline />
            <StyledInput placeholder="Name of Institution" disableUnderline />
            <StyledInput placeholder="Year Attained" disableUnderline />
            <StyledInput placeholder="Certificate id" disableUnderline />
          </Box>

          <Box
            sx={{
              display: "grid",
              placeContent: "center",
              width: "9.1875rem",
              height: "6.9375rem",
              borderRadius: "0.75rem",
              bgcolor: "#ffffff",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                color: "#888995",
                fontSize: "0.5625rem",
                fontWeight: 500,
                fontStyle: "italic",
                letterSpacing: "−0.0225rem",
              }}
            >
              Upload Certificate
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "22.625rem",
            flexDirection: "column",
            borderRadius: "0.625rem",
            padding: "0.8125rem 1.375rem",
            bgcolor: "#f9f9f9",
            // ml: "0.5rem",
            // mr: "0.5rem",
            margin: "2rem auto",
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
      {/* Bio Section End */}
    </Box>
  );
};

export default PersonalInfo;
