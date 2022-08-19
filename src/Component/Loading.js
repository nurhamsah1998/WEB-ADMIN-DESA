import React from "react";
import { Box, Button, Typography, LinearProgress } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h5">Mohon tunggu</Typography>
      <Typography mb={1} mt={-0.5}>
        kami sedang menyiapkan data untuk anda
      </Typography>
      <LinearProgress sx={{ height: 10 }} />
    </Box>
  );
}

export default Loading;
