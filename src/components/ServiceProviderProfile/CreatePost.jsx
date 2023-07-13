import { ArrowBackIosNew, Image, VideoCameraBack } from "@mui/icons-material";
import { Box, Button, IconButton, Input, Typography } from "@mui/material";

const CreatePost = () => {
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Box
        sx={{ display: "inline-flex", alignItems: "center", padding: "0 1rem" }}
      >
        <IconButton>
          <ArrowBackIosNew
            sx={{ color: "spIconsColor.main", fontSize: { tablet: "3rem" } }}
          />
        </IconButton>
        <Typography
          sx={{
            color: "#777683",
            fontWeight: 500,
            letterSpacing: { mobile: "−0.030625rem", tablet: "−0.04625rem" },
            fontSize: {
              mobile: "1rem",
              tablet: "1.125rem",
              largeDesktop: "1.375rem",
            },
          }}
        >
          Add Post
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          mb: "2rem",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            bgcolor: "cardColor.main",
            border: "0.125rem dashed #777683",
            marginTop: "2rem",
            borderRadius: { mobile: "1.5rem" },
            width: {
              mobile: "16.5625rem",
              tablet: "31.4375rem",
              laptop: "33.375rem",
              largeDesktop: "40.875rem",
            },
            height: {
              mobile: "13.5625rem",
              tablet: "25.75rem",
              laptop: "27.375rem",
              largeDesktop: "33.5rem",
            },
          }}
        >
          <Image
            sx={{
              color: "spIconsColor.main",
              fontSize: {
                mobile: "2rem",
                tablet: "4rem",
                largeDesktop: "6rem",
              },
            }}
          />
          <VideoCameraBack
            sx={{
              color: "spIconsColor.main",
              fontSize: {
                mobile: "2rem",
                tablet: "4rem",
                largeDesktop: "6rem",
              },
            }}
          />
          <Input
            disableUnderline
            placeholder="Enter price"
            sx={{
              position: "absolute",
              right: 20,
              bottom: 20,
              bgcolor: "spQualificationsCardBg.main",
              borderRadius: "1.5625rem",
              fontWeight: "500",
              padding: { mobile: "0 0.625rem", largeDesktop: "0 2rem" },
              fontSize: {
                mobile: "0.5rem",
                tablet: "0.875rem",
                laptop: "1.125rem",
              },
              width: {
                mobile: "6.5625rem",
                tablet: "12.375rem",
                laptop: "13.125rem",
                largeDesktop: "16rem",
              },
              height: {
                mobile: "1.625rem",
                tablet: "2.9375rem",
                laptop: "3.125rem",
                largeDesktop: "3.875rem",
              },
            }}
          />
        </Box>

        {/* post name start */}
        <Box>
          <Typography
            sx={{
              color: "#777683",
              fontWeight: 400,
              mb: "0.325rem",
              fontSize: {
                mobile: "0.5rem",
                tablet: "0.9375rem",
                largeDesktop: "1.125rem",
              },
            }}
          >
            Post Name
          </Typography>
          <Input
            disableUnderline
            sx={{
              pl: "0.625rem",
              border: "0.0625rem solid",
              borderColor: "#777683",
              borderRadius: { mobile: "1rem" },
              fontSize: { mobile: "0.75rem", tablet: "1rem" },
              width: {
                mobile: "15.375rem",
                tablet: "29.1875rem",
                laptop: "31rem",
                largeDesktop: "38rem",
              },
              height: {
                mobile: "1.875rem",
                tablet: "3.4375rem",
                laptop: "3.6875rem",
                largeDesktop: "4.5625rem",
              },
            }}
          />
        </Box>
        {/* post name end */}

        {/* post description start */}
        <Box>
          <Typography
            sx={{
              color: "#777683",
              fontWeight: 400,
              mb: "0.325rem",
              fontSize: {
                mobile: "0.5rem",
                tablet: "0.9375rem",
                largeDesktop: "1.125rem",
              },
            }}
          >
            Post Description
          </Typography>
          <Input
            disableUnderline
            sx={{
              pl: "0.625rem",
              border: "0.0625rem solid",
              borderColor: "#777683",
              borderRadius: { mobile: "1rem" },
              fontSize: { mobile: "0.75rem", tablet: "1rem" },
              width: {
                mobile: "15.375rem",
                tablet: "29.1875rem",
                laptop: "31rem",
                largeDesktop: "38rem",
              },
              height: {
                mobile: "3.0625rem",
                tablet: "5.8125rem",
                laptop: "6.1875rem",
                largeDesktop: "7.625rem",
              },
            }}
          />
        </Box>
        {/* post description end */}

        <Button
          sx={{
            bgcolor: "spDeleteBtn.main",
            color: "spAddPostBtn.color",
            fontWeight: 500,
            textTransform: "capitalize",
            borderRadius: { mobile: "0.75rem" },
            fontSize: {
              mobile: "0.5625rem",
              tablet: "1.0625rem",
              largeDesktop: "1.25rem",
            },
            width: {
              mobile: "7.4375rem",
              tablet: "14.1875rem",
              laptop: "15rem",
              largeDesktop: "18.375rem",
            },
            height: {
              mobile: "1.3125rem",
              tablet: "2.5rem",
              laptop: "2.625rem",
              largeDesktop: "3.1875rem",
            },
          }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
