import { Add, ArrowBackIosNew } from "@mui/icons-material";
import {
  Box,
  Card,
  CardMedia,
  Fab,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainContext from "../../context/mainContext";

const Catalog = () => {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const { products } = useContext(MainContext);
  if (!products) return "Loading";

  return (
    <Box sx={{ padding: "1rem 0" }}>
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
          All Catalogs
        </Typography>
      </Box>
      <Grid container>
        {products.map(({ name, description, imageUrl, price }, id) => (
          <Grid
            key={id}
            item
            mobile={12}
            tablet={6}
            laptop={4}
            largeDesktop={3}
          >
            <Card
              sx={{
                height: "20.1875rem",
                bgcolor: "spPostCardBg.main",
                overflow: "hidden",
                borderRadius: "4rem",
                margin: "1rem auto",
                width: { mobile: "21.5625rem" },
                height: { mobile: "20.1875rem" },
              }}
            >
              <CardMedia
                image={imageUrl}
                alt={name}
                sx={{
                  position: "relative",
                  borderRadius: "0rem",
                  width: "100%",
                  background: `#00000050`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  height: { mobile: "16.25rem" },
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
                    background:
                      "linear-gradient(to bottom, #ffffff90, #e2209e90)",
                  }}
                >
                  ${price}
                </Box>
              </CardMedia>

              <Typography
                align="center"
                sx={{
                  color: "#f9f9f9",
                  fontWeight: 500,
                  fontStyle: "italic",
                  letterSpacing: { mobile: "-0.03rem" },
                  fontSize: { mobile: "0.75rem" },
                }}
              >
                {name}
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
                  lineHeight: { mobile: "0.875rem" },
                }}
              >
                {description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Link to={`/profile/${user_id}/create-catalog`}>
        <Fab
          sx={{
            m: 3,
            position: "fixed",
            float: "left",
            right: "0",
            bottom: "0",
            color: "#FFFFFF90",
            backgroundColor: "spDeleteBtn.main",
            transition: "0.3s ease-in-out",

            "&:hover": {
              backgroundColor: "spDeleteBtn.main",
              color: "#f9f9f9",
              height: 70,
              width: 70,
            },
          }}
          aria-label="Add New Catalog"
        >
          <Add />
        </Fab>
      </Link>
    </Box>
  );
};

export default Catalog;
