import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import MainContext from "../context/mainContext";
import { useContext } from "react";

const PostCard = ({
  post: { sales, recommendations, thumbnailurl, title, description },
}) => {
  const { authors } = useContext(MainContext);

  return (
    <Stack direction="column" gap={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="275px"
      >
        <Stack direction="row" alignItems="center" gap={0.3}>
          <Avatar sx={{ width: "43px", height: "43px" }} />
          <Box>
            <Typography
              sx={{
                color: "#242254",
                fontSize: "10px",
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              fname lname
            </Typography>
            <Stack direction="row" gap={0.3}>
              <Typography
                sx={{
                  color: "#242254",
                  fontSize: "9px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  letterSpacing: "-0.36px",
                }}
              >
                <Box
                  component={"span"}
                  sx={{ fontSize: "7px", fontWeight: 500 }}
                >
                  {sales}
                </Box>{" "}
                sales .
              </Typography>

              <Typography
                sx={{
                  color: "#242254",
                  fontSize: "9px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  letterSpacing: "-0.36px",
                }}
              >
                <Box
                  component={"span"}
                  sx={{ fontSize: "7px", fontWeight: 500 }}
                >
                  {recommendations}
                </Box>{" "}
                recommendations
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Button
          sx={{
            width: "74px",
            height: "18px",
            fontSize: "7px",
            fontWeight: 500,
            borderRadius: "9px",
            backgroundColor: "orderBtn.main",
          }}
          variant="contained"
        >
          Order
        </Button>
      </Stack>

      <Card
        sx={{
          width: "290px",
          height: "265px",
          bgcolor: "#e2209e",
          borderRadius: "25px",
        }}
      >
        <CardMedia
          image={thumbnailurl.url}
          alt={thumbnailurl.alt}
          sx={{ width: "100%", height: "220px", bgcolor: "#00000060" }}
        />

        <CardContent
          sx={{
            padding: "2px",
            px: "20px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#f9f9f9",
              fontSize: "12px",
              fontWeght: 500,
              fontStyle: "italic",
              letterSpacing: "-0.48px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#f9f9f9",
              fontSize: "6px",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default PostCard;
