import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import deleteIcon from "../../../assets/images/icons/icon-delete.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "6px",
  boxShadow: 24,
  p: 2,
};

export default function CommentDelete({ deleteComment, videoId, commentId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img
        className="comments__user-delete"
        src={deleteIcon}
        alt="delete-comment"
        onClick={handleOpen}
      />
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
          <Box className="comments__user-delete-container" sx={style}>
            <p
              id="transition-modal-title"
              className="comments__user-delete-confirm"
            >
              ARE YOU SURE?
            </p>
            <p
              className="comments__user-delete-yes"
              onClick={() => deleteComment(videoId, commentId)}
            >
              YES
            </p>

            <p
              className="comments__user-delete-no"
              onClick={() => handleClose()}
            >
              NO
            </p>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
