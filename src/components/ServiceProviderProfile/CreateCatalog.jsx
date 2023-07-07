import { Box, Button } from "@mui/material";

const CreateCatalog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        pb: 5,
      }}
    >
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
