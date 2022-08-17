import React from "react";
import { Box, Typography } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
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
          <Box sx={{ height: "100vh" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight={700} color={"#fff"}>
                  Website Resmi Desa Bajulan
                </Typography>
                <Typography variant="h6" color={"#fff"}>
                  menuju visi misi bersama.
                </Typography>
                <Box>
                  <img maxWidth="100%" src="/Auth/rafiki.svg" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: { xs: "100%", sm: "100%", lg: "80%", xl: "80%" },
          }}
        >
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
}
