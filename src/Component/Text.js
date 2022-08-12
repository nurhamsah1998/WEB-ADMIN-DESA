import React from "react";
import { Typography } from "@mui/material";

function Text({ children, color, sx, fontWeight, paragraf, title, large, subTitle, ...props }) {
  return (
    <>
      {paragraf ? (
        <Typography color={color ? color : "grey"} fontSize={{ xs: 10, sm: 16 }} sx={sx} {...props}>
          {children}
        </Typography>
      ) : null}
      {title ? (
        <Typography
          color={color ? color : "black"}
          fontWeight={fontWeight ? fontWeight : "700"}
          fontSize={large ? { xs: 16, sm: 30 } : { xs: 14, sm: 28 }}
          sx={sx}
          {...props}
        >
          {children}
        </Typography>
      ) : null}
      {subTitle ? (
        <Typography
          color={color ? color : "black"}
          fontWeight={fontWeight ? fontWeight : "600"}
          fontSize={{ xs: 13, sm: 24 }}
          sx={sx}
          {...props}
        >
          {children}
        </Typography>
      ) : null}
    </>
  );
}

export default Text;
