import { Box } from "@mui/system";
import React from "react";
import Apparatus from "./Apparatus";
import Events from "./Event";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Events />
      <Apparatus />
      <Footer />
    </Box>
  );
}
