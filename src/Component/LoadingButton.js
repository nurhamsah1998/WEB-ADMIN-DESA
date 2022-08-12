import React from "react";
import { Button, CircularProgress } from "@mui/material";

function LoadingButton({ isLoading, sx, title, ...props }) {
  return (
    <Button {...props} disabled={isLoading} sx={{ height: "50px", ...sx }}>
      {isLoading ? <CircularProgress size={27} /> : title}
    </Button>
  );
}

export default LoadingButton;
