import { ArrowBackIosNew, Image } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateData } from "../../utils/updateData";

const ProfileDetails = () => {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const [serviceType, setServiceType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateData(`authors/${user_id}`, { service_type: serviceType });

    setServiceType("");
  };
  return (
    <Box my={3}>
      <Box
        sx={{ display: "inline-flex", alignItems: "center", padding: "0 1rem" }}
      >
        <IconButton onClick={() => navigate(`/profile/${user_id}`)}>
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
          Profile Details
        </Typography>
      </Box>

      <Stack
        onSubmit={handleSubmit}
        component={"form"}
        direction={"column"}
        gap={2}
        mt={5}
        alignItems={"center"}
      >
        <Box
          sx={{
            display: "grid",
            placeContent: "center",
            borderRadius: "50%",
            border: "2px dashed #777683",
            bgcolor: "cardColor.main",
            width: { mobile: "217px", tablet: "477px", largeDesktop: "583px" },
            height: { mobile: "217px", tablet: "477px", largeDesktop: "572px" },
          }}
        >
          {/* <img src="" alt="Profile Picture" /> */}
          <Image
            sx={{
              color: "spDeleteBtn.main",
              fontSize: { mobile: "31px", tablet: "69px" },
            }}
          />
        </Box>

        <Box>
          <Typography
            sx={{
              mx: "10px",
              my: "7px",
              color: "#777683",
              fontWeight: 400,
              fontSize: { mobile: "8px", tablet: "17px" },
            }}
          >
            Enter Service Type
          </Typography>
          <Input
            type="input"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            disableUnderline
            sx={{
              px: "10px",
              fontSize: { mobile: "10px", tablet: "16px" },
              border: "1px solid #777683",
              borderRadius: "16px",
              width: { mobile: "246px", tablet: "542px" },
              height: { mobile: "29px", tablet: "64px" },
            }}
          />
        </Box>

        <Button
          type="submit"
          sx={{
            fontWeight: 500,
            bgcolor: "spAddPostBtn.bg",
            color: "spAddPostBtn.color",
            borderRadius: "12px",
            textTransform: "capitalize",
            fontSize: { mobile: "10px", tablet: "22px" },
            width: { mobile: "131px", tablet: "287px" },
            height: { mobile: "23px", tablet: "50px" },
            transition: "ease-in-out 0.3ms",

            ":hover": {
              bgcolor: "spAddPostBtn.bg",
            },
          }}
        >
          Save
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileDetails;
