import React from "react";
import { Typography } from "@mui/material";

function Text({ children, color, paragraf, title, ...props }) {
  return (
    <>
      {paragraf ? (
        <Typography color={color ? color : "black"} fontSize={{ xs: 10, sm: 16 }} {...props}>
          {children}
        </Typography>
      ) : null}
      {title ? (
        <Typography color={color ? color : "black"} fontWeight="700" fontSize={{ xs: 14, sm: 28 }} {...props}>
          {children}
        </Typography>
      ) : null}
    </>
  );
}

export default Text;
