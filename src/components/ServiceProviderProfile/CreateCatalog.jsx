import { Box, Button, Input } from "@mui/material";

const CreateCatalog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          height: "23.0625rem",
          width: "21.5625rem",
          bgcolor: "#e2209e",
          borderRadius: "3.8125rem",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "16.375rem",
            borderRadius: "3.8125rem",
            bgcolor: "#e8e8e8",
          }}
        >
          <input
            placeholder="EnterPrice"
            style={{
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
              fontWeight: "500",
              letterSpacing: "-0.025rem",
              background: "linear-gradient(to bottom, #ffffff90, #e2209e90)",
              outline: "none",
              border: 0,
              textAlign: "center",
            }}
          />
        </Box>

        <input
          placeholder="Enter Catalog Name"
          style={{
            width: "15.125rem",
            height: "2rem",
            fontSize: "0.75rem",
            border: "0.0625rem solid #e8e8e8",
            borderRadius: "1rem",
            color: "#f9f9f9",
            textAlign: "center",
            backgroundColor: "transparent",
            margin: ".5rem",
            outline: "none",
          }}
        />
        <input
          placeholder="Enter Catalog Description"
          style={{
            width: "15.125rem",
            height: "2rem",
            fontSize: "0.75rem",
            border: "0.0625rem solid #e8e8e8",
            borderRadius: "1rem",
            color: "#f9f9f9",
            textAlign: "center",
            backgroundColor: "transparent",
            margin: "0.2rem",
            outline: "none",
          }}
        />
      </Box>

      <Button
        variant="contained"
        sx={{
          width: "8.1875rem",
          height: "1.4375rem",
          borderRadius: "0.75rem",
          border: 0,
          bgcolor: "#dc1f8a",
          color: "#e6e6e5",
          fontSize: "0.625rem",
          fontWeight: 500,
          letterSpacing: "-0.025rem",
          mt: 3,
          textTransform: "capitalize",
        }}
      >
        Post
      </Button>
    </Box>
  );
};

export default CreateCatalog;
