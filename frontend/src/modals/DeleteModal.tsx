import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";

const DeleteModal = () => {
  const { openDeleteModal, handleCloseDeleteModal } = useContext(ModalsContext);
  return (
    <Modal
      open={openDeleteModal}
      onClose={handleCloseDeleteModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal !min-w-[25vw] md:!min-w-[20vw]`}>
        <Forms type={"delete"} />
      </Box>
    </Modal>
  );
};

export default DeleteModal;
