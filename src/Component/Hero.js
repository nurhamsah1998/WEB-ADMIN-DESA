import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Text from "./Text";

function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"/Assets/bg-home.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: 2, sm: 10, md: 10, lg: 10 },
        paddingTop: { xs: "100px", sm: "240px", md: "280px", lg: "280px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              fontSize={{ xs: 20, sm: 40 }}
              fontWeight="700"
              color="white"
            >
              Desa Bajulan,kecamatan Rembang
            </Typography>
            <Text paragraf sx={{ marginTop: { xs: 2, sm: 4 } }}>
              Trabalhamos com as tecnologias mais atuais e oferecemos as
              melhores soluções para o seu negócio.
            </Text>

            <Button
              variant="contained"
              size="small"
              sx={{ marginTop: { xs: 2, sm: 4 } }}
            >
              Blog
            </Button>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              sx={{
                maxWidth: { xs: 250, sm: 400, md: 450 },
              }}
              alt="image"
              src="../../Assets/img-home.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Hero;
