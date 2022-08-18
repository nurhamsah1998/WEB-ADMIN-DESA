import React from "react";
import { Box, Typography, LinearProgress, Button } from "@mui/material";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import { Box, Typography, LinearProgress } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { red } from "@mui/material/colors";

function Denied() {
  const handleBack = () => {
    localStorage.clear();
    window.location.reload();
  };

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
            <LockIcon sx={{ scale: "10" }} color="secondary" />
          </Box>

          <Box sx={{ width: "100%", mt: 2 }}>
            <Typography variant="h4" fontWeight={600} color="#fff">
              Mohon maaf akun anda tidak diterima
            </Typography>
            <Typography variant="h6" mb={3} color="#fff">
              sepertinya beberapa data yang anda masukkan tidak sesuai dengan
              data diserver kami
            </Typography>
            <Button onClick={handleBack} variant="contained" sx={{ color: "white", bgcolor: "mediumseagreen" }}>
              Oke
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Denied;
