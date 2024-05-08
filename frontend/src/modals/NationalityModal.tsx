import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../contexts/FormsContext";
import Forms from "../forms/Forms";

const NationalityModal = () => {
  const { openNationalityModal, handleCloseNationalityModal, formType } =
    useContext(FormsContext);
  return (
    <Modal
      open={openNationalityModal}
      onClose={handleCloseNationalityModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <Forms type={formType} />
      </Box>
    </Modal>
  );
};

export default NationalityModal;
