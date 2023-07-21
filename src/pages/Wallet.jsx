import { MoreVert } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const Wallet = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={{ mobile: 2, tablet: 4 }}
      py={5}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { mobile: 5, laptop: 25 },
          bgcolor: "#e2209e",
          borderRadius: "18px",
          boxShadow: "0 3px 44px rgba(104, 30, 121, 0.06)",
          width: {
            mobile: "329px",
            tablet: "671px",
            laptop: "815px",
            largeDesktop: "1126px",
          },
          height: {
            mobile: "123px",
            tablet: "252px",
            laptop: "183px",
            largeDesktop: "182px",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 400,
              mb: 2,
              fontSize: { mobile: "12px", tablet: "24px", laptop: "21px" },
            }}
          >
            Account State
          </Typography>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 400,
              fontSize: { mobile: "12px", tablet: "24px", laptop: "21px" },
            }}
          >
            Time to Next Withdrawal
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 500,
              mb: 2,
              fontSize: { mobile: "12px", tablet: "24px", laptop: "21px" },
            }}
          >
            Active
          </Typography>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 500,
              fontSize: { mobile: "12px", tablet: "24px", laptop: "21px" },
            }}
          >
            3 Days 12 Hours
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#ffffff",
          boxShadow: "0 3px 30px rgba(56, 9, 67, 0.04)",
          borderRadius: "18px",
          width: {
            mobile: "328px",
            tablet: "671px",
            laptop: "815px",
            largeDesktop: "1127px",
          },
          height: {
            mobile: "186px",
            tablet: "381px",
            laptop: "268px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            bgcolor: "#e8e8e8",
            boxShadow: " 0 3px 44px rgba(104, 30, 121, 0.06)",
            borderRadius: "18px",
            width: "100%",
            height: { mobile: "149px", tablet: "306px", laptop: "186px" },
          }}
        >
          <Box
            ml={{ laptop: -10 }}
            mr={{ laptop: 20 }}
            sx={{
              width: { mobile: "72px", tablet: "148px", laptop: "105px" },
              height: { mobile: "72px", tablet: "148px", laptop: "105px" },
              bgcolor: "#e2209e",
              borderRadius: "50%",
            }}
          />

          <Stack>
            <Typography
              sx={{
                color: "#5e5e5e",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: { mobile: "25px", tablet: "50px", laptop: "35px" },
              }}
            >
              120.00 USD
            </Typography>

            <Typography
              sx={{
                color: "#5e5e5e",
                opacity: 0.55,
                fontWeight: 400,
                textTransform: "uppercase",
                fontSize: { mobile: "15px", tablet: "30px", laptop: "21px" },
              }}
            >
              100000.00 ZWD
            </Typography>
          </Stack>

          <MoreVert
            sx={{
              color: "#e2209e",
              fontSize: { mobile: "35px", tablet: "70px", laptop: "45px" },
            }}
          />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          gap={{ mobile: 2, tablet: 10 }}
          justifyContent="center"
          mt={{ mobile: 1, tablet: 2 }}
        >
          <Typography
            sx={{
              color: "#e2209e",
              fontWeight: 500,
              fontSize: { mobile: "12px", tablet: "24px", laptop: "21px" },
            }}
          >
            Payments
          </Typography>
          <Typography
            sx={{
              color: "#0e112b",
              fontWeight: 400,
              fontSize: { mobile: "12px", tablet: "24px", laptop: "21px" },
            }}
          >
            Withdrawals
          </Typography>
          <Typography
            sx={{
              color: "#0e112b",
              fontWeight: 400,
              fontSize: { mobile: "12px", tablet: "24px", laptop: "21px" },
            }}
          >
            Reversed
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          bgcolor: "#ffffff",
          display: "grid",
          alignItems: "center",
          borderRadius: "22px",
          width: {
            mobile: "328px",
            tablet: "671px",
            laptop: "815px",
            largeDesktop: "1127px",
          },
          height: { mobile: "83px", tablet: "169px" },
        }}
      >
        <Stack
          direction="column"
          gap={1}
          p={{ mobile: 2, tablet: 4 }}
          pl={{ mobile: 10, tablet: 20, laptop: 30 }}
        >
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: "#0e112b",
                fontWeight: 600,
                fontSize: { mobile: "15px", tablet: "30px" },
              }}
            >
              Takudzwa Jauki
            </Typography>
            <Typography
              sx={{
                color: "#e2209e",
                fontWeight: 600,
                fontSize: { mobile: "12px", tablet: "24px" },
              }}
            >
              790.00 USD
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: "#757575",
                fontWeight: 500,
                fontSize: { mobile: "13px", tablet: "26px" },
              }}
            >
              Payment
            </Typography>
            <Typography
              sx={{
                color: "#757575",
                fontWeight: 500,
                fontSize: { mobile: "12px", tablet: "24px" },
              }}
            >
              03:20 PM
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          bgcolor: "#ffffff",
          borderRadius: "22px",
          width: {
            mobile: "328px",
            tablet: "670px",
            laptop: "815px",
            largeDesktop: "1127px",
          },
          height: { mobile: "83px", tablet: "169px" },
        }}
      >
        <Stack
          direction="row"
          p={{ mobile: 2, tablet: 4 }}
          pl={{ mobile: 10, tablet: 20, laptop: 30 }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              color: "#777683",
              fontWeight: 600,
              fontSize: { mobile: "15px", tablet: "30px" },
            }}
          >
            Withdrawal
          </Typography>

          <Stack
            direction="column"
            alignItems={"end"}
            gap={{ mobile: 1, tablet: 2 }}
          >
            <Typography
              sx={{
                color: "#e2209e",
                fontWeight: 600,
                fontSize: { mobile: "12px", tablet: "24px" },
              }}
            >
              790.00 USD
            </Typography>

            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  color: "#757575",
                  fontWeight: 500,
                  fontSize: { mobile: "12px", tablet: "24px" },
                }}
              >
                03:20 PM
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          bgcolor: "#ffffff",
          display: "grid",
          alignItems: "center",
          borderRadius: "22px",
          width: {
            mobile: "328px",
            tablet: "671px",
            laptop: "815px",
            largeDesktop: "1127px",
          },
          height: { mobile: "83px", tablet: "169px" },
        }}
      >
        <Stack
          direction="column"
          gap={1}
          p={{ mobile: 2, tablet: 4 }}
          pl={{ mobile: 10, tablet: 20, laptop: 30 }}
        >
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: "#0e112b",
                fontWeight: 600,
                fontSize: { mobile: "15px", tablet: "30px" },
              }}
            >
              Takudzwa Jauki
            </Typography>
            <Typography
              sx={{
                color: "#0e112b",
                fontWeight: 600,
                fontSize: { mobile: "12px", tablet: "24px" },
              }}
            >
              790.00 USD
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: "#757575",
                fontWeight: 500,
                fontSize: { mobile: "13px", tablet: "26px" },
              }}
            >
              Reversed
            </Typography>
            <Typography
              sx={{
                color: "#757575",
                fontWeight: 500,
                fontSize: { mobile: "12px", tablet: "24px" },
              }}
            >
              03:20 PM
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Button
        sx={{
          color: "#fff",
          bgcolor: "#e2209e",
          boxShadow: "0 3px 30px rgba(89, 18, 142, 0.45)",
          borderRadius: "10px",
          textTransform: "capitalize",
          fontWeight: 500,
          transition: "ease-in-out 0.3s",
          fontSize: { mobile: "26px", tablet: "53px" },
          width: {
            mobile: "328px",
            tablet: "671px",
            laptop: "815px",
            largeDesktop: "1127px",
          },
          height: { mobile: "78px", tablet: "161px" },

          ":hover": {
            bgcolor: "#e2209ede",
            color: "#ddd",
          },
        }}
      >
        Withdraw
      </Button>
    </Stack>
  );
};

export default Wallet;
