import React from "react";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PersonIcon from "@mui/icons-material/Person";
import { Typography, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function SubscriptionFeed() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={2}
      >
        <SubscriptionsIcon sx={{ fontSize: 100 }} />
        <Typography variant="h5" fontWeight={500}>
          Don’t miss new videos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sign in to see updates from your favorite YouTube channels
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to="/sign-in"
          startIcon={<PersonIcon fontSize="small" />}
          sx={{
            borderRadius: "9999px",
            textTransform: "none",
            fontWeight: 500,
            px: 2,
            py: 1,
          }}
        >
          Sign in
        </Button>
      </Stack>
    </Box>
  );
}

export default SubscriptionFeed;
