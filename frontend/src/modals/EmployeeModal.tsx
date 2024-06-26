import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../contexts/FormsContext";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";

const EmployeeModal = () => {
  const { openEmployeeModal, handleCloseEmployeeModal } =
    useContext(ModalsContext);
  const { formType } = useContext(FormsContext);
  return (
    <Modal
      open={openEmployeeModal}
      onClose={handleCloseEmployeeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <Forms type={formType} />
      </Box>
    </Modal>
  );
};

export default EmployeeModal;
