import React from "react";
import Apparatus from "./Pages/USER/Home/Apparatus";
import Events from "./Pages/USER/Home/Event";
import { Box } from "@mui/material";
import Hero from "./Component/Hero";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Events />
      <Apparatus />
    </Box>
  );
}
