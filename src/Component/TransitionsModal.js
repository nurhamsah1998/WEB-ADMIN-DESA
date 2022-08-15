import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 1,
  p: 2,
};

export default function TransitionsModal({
  open,
  handleClose,
  title,
  children,
  handleSubmit,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Box sx={{ p: 2, borderRadius: "5px", mt: 1 }}>{children}</Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Button onClick={handleClose} variant="contained" color="error">
                cancel
              </Button>
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
