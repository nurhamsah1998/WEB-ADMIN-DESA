import React from "react";
import { Box, Typography } from "@mui/material";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function Register() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            bgcolor: "#1BC5BD",
            width: "100%",
            height: "100vh",
            display: { xs: "none", sm: "none", lg: "block", xl: "block" },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 30%)",
              }}
            >
              <Typography variant="h4" fontWeight={700} color={"#fff"}>
                Website Resmi Desa Bajulan
              </Typography>
              <Typography variant="h6" mb={10} color={"#fff"}>
                menuju visi misi bersama.
              </Typography>
              <Box sx={{ mt: 5, transform: "scale(1.2)" }}>
                <img src="/Auth/rafiki.svg" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#fff",
            width: { xs: "100%", sm: "100%", lg: "80%", xl: "80%" },
          }}
        >
          <RegisterForm />
        </Box>
      </Box>
    </Box>
  );
}
