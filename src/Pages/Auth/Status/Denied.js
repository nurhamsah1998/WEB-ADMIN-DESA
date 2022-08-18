import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import { red } from "@mui/material/colors";

function Denied() {
  return (
    <Box
      sx={{
        bgcolor: red[500],
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ m: 2 }}>
        <Box
          sx={{
            display: { sm: "grid", xs: "grid", lg: "flex", xl: "flex" },
            alignItems: "center",
            textAlign: { xs: "center", sm: "center", xl: "left", lg: "left" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", xl: 180, lg: 180 },
              mb: { xs: 14, sm: 14, xl: 0, lg: 0 },
            }}
          >
            <GppMaybeIcon sx={{ scale: "10" }} color="secondary" />
          </Box>

          <Box sx={{ width: "100%", mt: 2 }}>
            <Typography variant="h4" fontWeight={600} color="#fff">
              Mohon maaf anda ditolak mentah mentah
            </Typography>
            <Typography variant="h6" mb={3} color="#fff">
              lorem ipsum dalam penngecekan lorem ipsum dalam penngecekan
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Denied;
