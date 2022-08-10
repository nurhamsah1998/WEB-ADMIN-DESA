import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

function Hero() {
  const menu = [
    {
      title: "Program",
      path: "/web-desa/user-program",
    },
    {
      title: "Pengaduan",
      path: "/web-desa/user-complaint",
    },
    {
      title: "Pengaturan",
      path: "/web-desa/user-settings",
    },
  ];
  return (
    <Container
      sx={{
        backgroundImage: `url(${"/Assets/bg-home.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        padding: "60px !important",
      }}
    >
      <Box display="flex" justifyContent="flex-end" gap={3}>
        {menu.map((item, index) => {
          return (
            <Link underline="none" color="white" fontSize="14px" fontWeight="700" key={index}>
              {item.title}
            </Link>
          );
        })}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="700" color="white">
            Desa Bajulan,kecamatan Rembang
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          fgfgf
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
