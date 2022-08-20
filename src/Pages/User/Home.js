import React from "react";
import Apparatus from "./Home/Apparatus";
import Events from "./Home/Event";
import { Box } from "@mui/material";
import Hero from "../../Component/Hero";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Events />
      <Apparatus />
    </Box>
  );
}
