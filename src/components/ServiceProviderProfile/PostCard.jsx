import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const PostCard = ({ post: { title, price, description, thumbnailurl } }) => {
  // console.log(data);
  return (
    <Card
      sx={{
        height: "20.1875rem",
        bgcolor: "spPostCardBg.main",
        overflow: "hidden",
        borderRadius: "4rem",
        width: { mobile: "21.5625rem", laptop: "35rem" },
        height: { mobile: "20.1875rem", laptop: "35rem" },
      }}
    >
      <CardMedia
        image={thumbnailurl?.url}
        alt={thumbnailurl?.alt}
        sx={{
          position: "relative",
          borderRadius: "0rem",
          width: "100%",
          background: `#00000050`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: { mobile: "16.25rem", laptop: "25rem" },
        }}
      >
        <Box
          sx={{
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
            fontWeight: 500,
            letterSpacing: "-0.025rem",
            background: "linear-gradient(to bottom, #ffffff90, #e2209e90)",
          }}
        >
          {`$${price}`}
        </Box>
      </CardMedia>

      <CardContent sx={{ padding: "5px" }}>
        <Typography
          align="center"
          sx={{
            color: "#f9f9f9",
            fontWeight: 500,
            fontStyle: "italic",
            margin: { laptop: "0.3rem 0" },
            letterSpacing: { mobile: "-0.03rem", laptop: "−0.0475rem" },
            fontSize: { mobile: "0.75rem", laptop: "1.1875rem" },
          }}
        >
          {title}
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "rgba(249, 249, 249, 0.79)",
            fontStyle: "italic",
            lineHeight: "0.875rem",
            pl: 3,
            pr: 3,
            fontSize: { mobile: "0.625rem" },
            letterSpacing: { mobile: "0.025625rem" },
            lineHeight: { mobile: "0.875rem", laptop: "0.8125rem" },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
