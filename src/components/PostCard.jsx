import { Verified } from "@mui/icons-material";
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
import { useNavigate } from "react-router-dom";

const PostCard = ({
  post: {
    sales,
    author,
    recommendations,
    thumbnail,
    title,
    description,
    price,
  },
}) => {
  const navigate = useNavigate();

  return (
    <Stack direction="column" gap={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="275px"
      >
        <Stack direction="row" alignItems="center" gap={0.3}>
          <Box position={"relative"}>
            <Avatar
              src={author.avatar}
              alt={author?.name}
              sx={{ width: "43px", height: "43px" }}
            />
            <Verified
              sx={{
                position: "absolute",
                right: 1,
                bottom: -3,
                color: "gold",
                width: { mobile: "15px" },
              }}
            />
          </Box>
          <Box>
            <Typography
              onClick={() => navigate(`/view-profile/${author.id}`)}
              sx={{
                color: "#242254",
                fontSize: "10px",
                fontWeight: 500,
                fontStyle: "italic",
                cursor: "default",
              }}
            >
              {author?.name}
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
          borderRadius: "65px",
        }}
      >
        <CardMedia
          image={thumbnail.url}
          alt={thumbnail.alt}
          sx={{
            position: "relative",
            width: "100%",
            height: "220px",
            bgcolor: "#00000060",
            borderRadius: "65px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 21,
              right: 24,
              width: "96px",
              height: "23px",
              borderRadius: "15px",
              bgcolor: "#ffffff90",
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: "9px", color: "utTitle.main" }}
            >
              ${price}
            </Typography>
          </Box>
        </CardMedia>

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
