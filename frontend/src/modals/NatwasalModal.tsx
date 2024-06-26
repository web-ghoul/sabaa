import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";
import { FormsContext } from "../contexts/FormsContext";

const NatwasalModal = () => {
  const { openNatwasalModal, handleCloseNatwasalModal } =
    useContext(ModalsContext);
  const { formType } = useContext(FormsContext);
  return (
    <Modal
      open={openNatwasalModal}
      onClose={handleCloseNatwasalModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <Forms type={formType} />
      </Box>
    </Modal>
  );
};

export default NatwasalModal;
