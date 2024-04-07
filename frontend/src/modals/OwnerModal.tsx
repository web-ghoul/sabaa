import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../contexts/FormsContext";
import Forms from "../forms/Forms";

const OwnerModal = () => {
  const { openOwnerModal, handleCloseOwnerModal, formType } =
    useContext(FormsContext);
  return (
    <Modal
      open={openOwnerModal}
      onClose={handleCloseOwnerModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={`bg-white rounded-xl p-6 md:p-4 sm:p-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute grid justify-stretch items-center max-w-[90vw] max-h-[90vh] w-max min-w-[60vw] overflow-auto gap-6`}
      >
        <Forms type={formType} />
      </Box>
    </Modal>
  );
};

export default OwnerModal;
