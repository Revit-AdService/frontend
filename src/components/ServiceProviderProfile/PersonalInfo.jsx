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
      <Box
        sx={{
          bgcolor: "spCardBg.main",
          mt: "1.375rem",
          px: { tablet: 2.5 },
          py: { tablet: 2.5 },
          width: { largeDesktop: "1629px" },
          height: {
            mobile: "13.3125rem",
            tablet: "253px",
            largeDesktop: "311px",
          },
        }}
      >
        <Toolbar sx={{ minHeight: "2rem" }}>
          <Typography
            flexGrow={1}
            sx={{
              color: "spHeading1.main",
              fontWeight: 500,
              fontStyle: "italic",
              letterSpacing: { mobile: "0.0325rem", tablet: "-0.96px" },
              fontSize: {
                mobile: "0.8125rem",
                tablet: "24px",
                largeDesktop: "25px",
              },
            }}
          >
            Bio
          </Typography>

          <Edit
            sx={{
              color: "spDeleteBtn.main",
              width: { mobile: "1rem", tablet: "25px", largeDesktop: "31px" },
            }}
          />
        </Toolbar>

        <Typography
          sx={{
            color: "spText.main",
            fontStyle: "Italic",
            textAlign: "Justify",
            p: "1.125rem",
            lineHeight: { mobile: "0.8475rem", tablet: "21.56px" },
            fontSize: { mobile: "0.5625rem", tablet: "15px" },
            letterSpacing: { mobile: "0.02375rem", tablet: "-0.62px" },
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
          bgcolor: "spCardBg.main",
          mt: "1.375rem",
          pb: "2rem",
          width: { largeDesktop: "1630px" },
          minHeight: {
            mobile: "27.3125rem",
            tablet: "895px",
            largeDesktop: "1099px",
          },
        }}
      >
        <Toolbar
          sx={{ minHeight: "2rem", px: { tablet: 4 }, py: { tablet: 2.5 } }}
        >
          <Typography
            flexGrow={1}
            sx={{
              color: "spHeading1.main",
              fontWeight: 500,
              fontStyle: "italic",
              letterSpacing: { mobile: "0.0325rem", tablet: "-1px" },
              fontSize: { mobile: "0.8125rem", tablet: "25px" },
            }}
          >
            Qualifications
          </Typography>

          <Add
            variant={"filled"}
            sx={{
              color: "spDeleteBtn.main",
              width: { mobile: "1rem", tablet: "25px", largeDesktop: "40px" },
            }}
          />
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
            bgcolor: "spQualificationsCardBg.main",
            p: "0.875rem",
            height: { mobile: "11rem", tablet: "360px" },
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
              borderRadius: "0.75rem",
              bgcolor: "#ffffff",
              cursor: "pointer",
              height: { mobile: "6.9375rem", tablet: "224px" },
              width: { mobile: "9.1875rem", tablet: "297px" },
            }}
          >
            <Typography
              sx={{
                color: "spDeleteBtn.main",
                fontWeight: 500,
                fontStyle: "italic",
                letterSpacing: "−0.0225rem",
                fontSize: { mobile: "0.5625rem", tablet: "18px" },
              }}
            >
              Upload Certificate
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            flexDirection: "column",
            borderRadius: "0.625rem",
            padding: "0.8125rem 1.375rem",
            bgcolor: "spQualificationsCardBg.main",
            // ml: "0.5rem",
            // mr: "0.5rem",
            margin: "2rem auto",
            width: { mobile: "22.625rem", tablet: "739px" },
            px: { tablet: 5 },
            py: { tablet: 5 },
          }}
        >
          <Typography
            sx={{
              color: "spText.main",
              fontWeight: 500,
              letterSpacing: { mobile: "-0.035rem", tablet: "-1.08px" },
              fontSize: { mobile: "0.875rem", tablet: "27px" },
            }}
          >
            Bachelors of Software Engineering
          </Typography>

          <Typography
            sx={{
              color: "spText.main",
              fontStyle: "italic",
              fontSize: { mobile: "0.5625rem", tablet: "17px" },
            }}
          >
            University of Zimbabwe
          </Typography>

          <Typography
            sx={{
              color: "spText.main",
              fontStyle: "italic",
              fontSize: { mobile: "0.5625rem", tablet: "17px" },
            }}
          >
            2022
          </Typography>

          <Button
            startIcon={
              <Delete
                sx={{
                  width: { mobile: "1rem", tablet: "20px" },
                  mr: { mobile: -1, tablet: 0 },
                }}
              />
            }
            sx={{
              color: "spDeleteBtn.main",
              fontWeight: 500,
              fontStyle: "italic",
              textTransform: "capitalize",
              position: "absolute",
              right: { mobile: ".7rem", tablet: 50 },
              bottom: { mobile: ".7rem", tablet: 30 },
              width: "4.2rem",
              height: "1.25rem",
              fontSize: { mobile: "0.75rem", tablet: "22px" },
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
