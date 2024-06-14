import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../contexts/FormsContext";
import Forms from "../forms/Forms";

const UserModal = () => {
  const { openUserModal, handleCloseUserModal, formType } =
    useContext(FormsContext);
  return (
    <Modal
      open={openUserModal}
      onClose={handleCloseUserModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <Forms type={formType} />
      </Box>
    </Modal>
  );
};

export default UserModal;
