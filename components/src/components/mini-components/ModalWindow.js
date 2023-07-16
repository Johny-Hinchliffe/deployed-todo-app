import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";

// const modalArgs = {
//   openModal: true,
//   content: `${modalContent.data1}`,
//   sx: {
//     width: "80%",
//     //  child,
//     height: "50%",
//     onClose: false,
//     backButton: true,
//     maxWidth: "200px",
//   },
// };

export default function ModalWindow({ details, open, setOpen }) {
  const { content, child, onClose, backButton, sx } = details;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: sx.height,
    // width: {sx.width},
    width: sx.width,
    // maxWidth: !sx.maxWidth ? 900 : sx.maxWidth,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    // HERE
  };

  return (
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
      hideBackdrop={child ? true : false}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {backButton ? backButton : <div></div>}
            <Button onClick={() => handleClose()}>
              <CloseIcon />
            </Button>
          </Box>
          {content}
        </Box>
      </Fade>
    </Modal>
  );
}
