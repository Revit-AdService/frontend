import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Ratings = () => {
  return (
    <Stack
      direction={"column"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      my={15}
      gap={"22px"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={5}
        width={{ mobile: 278, tablet: 422, laptop: 476, largeDesktop: 648 }}
        pl={"16px"}
      >
        <Typography
          sx={{
            color: "#242254",
            fontWeight: 500,
            fontSize: { mobile: "13px", largeDesktop: "16px" },
          }}
        >
          Rating
        </Typography>

        <Box>
          <Rating
            defaultValue={3.5}
            precision={0.5}
            sx={{
              color: "spIconsColor.main",
              mt: { laptop: "0.5rem" },
              fontSize: {
                mobile: "20px",
                largeDesktop: "25px",
              },
            }}
          />
        </Box>
      </Stack>

      <TextField
        id="review"
        label="Review"
        multiline
        rows={12}
        InputProps={{
          disableUnderline: true,
          style: {
            background: "transparent",
            fontSize: "11px",
          },
        }}
        variant="filled"
        sx={{
          boxShadow: "0 4px 8px rgba(44, 39, 56, 0.04)",
          bgcolor: "#fff",
          borderRadius: "30px",
          width: { mobile: 278, tablet: 422, laptop: 476, largeDesktop: 648 },
          outline: "none",
          border: 0,
        }}
      />

      <Box
        display={"flex"}
        width={{ mobile: 278, tablet: 422, laptop: 476, largeDesktop: 648 }}
      >
        <Typography flexGrow={1} />
        <Button
          sx={{
            bgcolor: "#e2209e",
            color: "#f9f9f9",
            fontWeight: 500,
            borderRadius: "20px",
            textTransform: "capitalize",
            fontSize: { mobile: "7px", tablet: "11px", largeDesktop: "14px" },
            width: {
              mobile: "81px",
              tablet: "121px",
              laptop: "136px",
              largeDesktop: "184px",
            },
            height: {
              mobile: "19px",
              tablet: "29px",
              laptop: "32px",
              largeDesktop: "44px",
            },

            ":hover": {
              bgcolor: "#e2209e",
            },
          }}
        >
          Post Review
        </Button>
      </Box>
    </Stack>
  );
};

export default Ratings;
