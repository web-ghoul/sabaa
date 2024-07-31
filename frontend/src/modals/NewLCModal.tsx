import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";

const NewLCModal = () => {
  const { openNewLCModal, handleCloseNewLCModal } = useContext(ModalsContext);

  return (
    <Modal
      open={openNewLCModal}
      onClose={handleCloseNewLCModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <Forms type={"newLC"} />
      </Box>
    </Modal>
  );
};

export default NewLCModal;
