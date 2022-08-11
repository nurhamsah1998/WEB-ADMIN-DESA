import { Box } from "@mui/system";
import React from "react";
import Events from "./Event";
import Hero from "./Hero";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Events />
    </Box>
  );
}
