import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Notif } from "../Hooks/useContextNotification";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({
  children,
  variant = "info",
  message = "notif",
  v = false,
}) {
  const [open, setOpen] = React.useState(false);
  const { notif, setNotif } = useContext(Notif);
  const handleClick = () => {
    setOpen(true);
  };
  const vertical = "top";
  const horizontal = "right";
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  if (v) {
    setTimeout(() => {
      setNotif((e) => ({
        ...e,
        v: false,
      }));
    }, 5000);
  }
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={v}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={variant} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
