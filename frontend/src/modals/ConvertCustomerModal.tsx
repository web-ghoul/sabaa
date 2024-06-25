import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";

const ConvertCustomerModal = () => {
  const { openConvertCustomerModal, handleCloseConvertCustomerModal } =
    useContext(ModalsContext);
  return (
    <Modal
      open={openConvertCustomerModal}
      onClose={handleCloseConvertCustomerModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <Forms type={"convertCustomer"} />
      </Box>
    </Modal>
  );
};

export default ConvertCustomerModal;
