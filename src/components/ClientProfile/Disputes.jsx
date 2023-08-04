import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Disputes = () => {
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
            fontSize: { mobile: "14px", tablet: "16px", largeDesktop: "19px" },
          }}
        >
          Customer Support
        </Typography>
      </Stack>

      <Box
        sx={{
          width: { mobile: 278, tablet: 422, laptop: 476, largeDesktop: 648 },
          boxShadow: "0 4px 8px rgba(44, 39, 56, 0.04)",
          bgcolor: "#fff",
          borderRadius: "30px",
          border: "1px solid #dbe2ea",
        }}
      >
        <Box
          sx={{
            display: "grid",
            placeContent: "center",
            m: "16px",
            mb: 0,
            bgcolor: "#e6e6e6",
            borderRadius: "14px",
            width: { mobile: "120px", largeDesktop: "121px" },
            height: { mobile: "18px", largeDesktop: "24px" },
          }}
        >
          <Typography
            sx={{
              color: "#242254",
              fontWeight: 500,
              fontSize: { mobile: "10px", largeDesktop: "13px" },
            }}
          >
            Order No: Revit###
          </Typography>
        </Box>

        <TextField
          id="dispute"
          label="Dispute"
          placeholder="Write Dispute...…….."
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
            // bgcolor: "#00000020",
            width: { mobile: 278, tablet: 422, laptop: 476, largeDesktop: 648 },
            outline: "none",
            border: 0,
          }}
        />
      </Box>

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
          Send
        </Button>
      </Box>
    </Stack>
  );
};

export default Disputes;
