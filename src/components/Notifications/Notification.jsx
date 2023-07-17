import { Avatar, Box, Stack, Typography } from "@mui/material";

const Notification = ({ name }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        bgcolor: "spCardBg.main",
        borderRadius: "40px",
        px: 2,
        py: 1,
        width: { mobile: "363px" },
        height: { mobile: "95px" },
      }}
    >
      <Box
        sx={{
          bgcolor: "spQualificationsCardBg.main",
          border: "2px solid",
          borderColor: "spDeleteBtn.main",
          borderRadius: "50%",
          width: { mobile: "51px" },
          height: { mobile: "51px" },
        }}
      >
        <Avatar alt={name} sx={{ width: "100%", height: "100%" }} />
      </Box>

      <Box sx={{ width: "80%" }}>
        <Stack
          alignItems={"center"}
          direction="row"
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{
              color: "spText.main",
              fontWeight: 500,
              fontSize: { mobile: "11px" },
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{ color: "spText.main", fontStyle: "italic", fontSize: "7px" }}
          >
            <Box component={"span"}>1900</Box>{" "}
            <Box component={"span"}>Sat 12 June 2023</Box>
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: "spText.main",
            width: { mobile: "80%" },
            fontSize: { mobile: "9px" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ab
          aliquam, porro error eum recusandae harum labore. Reiciendis!
        </Typography>
      </Box>
    </Stack>
  );
};

export default Notification;
