import { MoreVert } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Ecocash from "../components/Withdral/Ecocash";

const Withdraw = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={{ mobile: 2, tablet: 4 }}
      py={5}
    >
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
            Choose Bank
          </Typography>
        </Stack>
      </Box>

      {/* banking options start */}
      <Stack direction="row" alignItems="center" gap={2}>
        <Button
          sx={{
            width: "58px",
            height: "28px",
            boxShadow: "0 3px 24px rgba(119, 31, 185, 0.13)",
            bgcolor: "#ffffff",
          }}
        >
          VISA
        </Button>
        <Button
          sx={{
            width: "58px",
            height: "28px",
            boxShadow: "0 3px 24px rgba(119, 31, 185, 0.13)",
            bgcolor: "#ffffff",
            fontSize: "10px",
          }}
        >
          EcoCash
        </Button>
        <Button
          sx={{
            width: "58px",
            height: "28px",
            boxShadow: "0 3px 24px rgba(119, 31, 185, 0.13)",
            bgcolor: "#ffffff",
            fontSize: "12px",
          }}
        >
          PayPal
        </Button>
      </Stack>
      {/* banking options end */}

      <Stack
        directio="column"
        justifyContent="space-between"
        p="22px"
        sx={{
          bgcolor: "#e2209e",
          border: "1px solid rgba(255, 255, 255, 0.13)",
          borderRadius: "24px",
          width: { mobile: "316px", tablet: "652px" },
          height: { mobile: "388px", tablet: "800px" },
        }}
      >
        <Ecocash />

        {/* Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "3px solid #ffffff",
              bgcolor: "#ffffff",
              color: "#e2209e",
              fontWeight: 700,
              fontSize: "11px",
              width: "131px",
              height: "28px",
              transition: "ease-in-out 0.5s",

              ":hover": {
                bgcolor: "#e2209e",
                color: "#ffffff",
              },
            }}
          >
            Make Withdrawal
          </Button>

          <Button
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "3px solid #ffffff",
              color: "#ffffff",
              bgcolor: "#e2209e",
              fontWeight: 700,
              fontSize: "11px",
              width: "131px",
              height: "28px",
              transition: "ease-in-out 0.5s",

              ":hover": {
                color: "#e2209e",
                bgcolor: "#ffffff",
              },
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Withdraw;
