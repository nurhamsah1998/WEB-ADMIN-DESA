import React from "react";
import { Button, CircularProgress } from "@mui/material";

function LoadingButton({ isLoading, sx, title, height = "50px", ...props }) {
  return (
    <Button {...props} disabled={isLoading} sx={{ height: height, ...sx }}>
      {isLoading ? <CircularProgress size={27} /> : title}
    </Button>
  );
}

export default LoadingButton;
