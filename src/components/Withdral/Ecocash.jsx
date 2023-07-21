import { Box, Input, Typography } from "@mui/material";

const Ecocash = () => {
  return (
    <Box>
      <Typography sx={{ color: "#ffffff", fontWeight: 400, fontSize: "9px" }}>
        Current Ecocash Acc
      </Typography>

      <Box
        my={1}
        sx={{
          p: "6px",
          pt: "30px",
          border: "2px solid rgba(255, 255, 255, 0.13)",
          boxShadow: "0 20px 26px rgba(0, 47, 72, 0.31)",
          borderRadius: "8px",
          bgcolor: "#e2209e",
          width: { mobile: "130px", tablet: "268px" },
          height: { mobile: "73px", tablet: "150px" },
        }}
      >
        <Typography
          sx={{ color: "#f8f8f8", fontWeight: 400, fontSize: "10px" }}
        >
          **** **** **** 3294
        </Typography>

        <Typography
          pt={"4px"}
          sx={{ color: "#f9f9f9", fontWeight: 400, fontSize: "8px" }}
        >
          Takudzwa Jauki
        </Typography>
      </Box>

      <Typography
        mt={"51px"}
        sx={{ color: "#ffffff", fontWeight: 400, fontSize: "9px" }}
      >
        Phone Number
      </Typography>

      <Input
        disableUnderline
        sx={{
          color: "#fff",
          fontWeight: "600",
          fontSize: "10px",
          width: "273px",
          height: "33px",
          borderRadius: "16px",
          border: " 3px solid #ffffff",
          bgcolor: "rgba(0, 0, 0, 0.16)",
          px: "10px",
          my: "10px",
        }}
      />
    </Box>
  );
};

export default Ecocash;
