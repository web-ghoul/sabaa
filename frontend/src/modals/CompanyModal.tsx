import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../contexts/FormsContext";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";

const CompanyModal = () => {
  const { openCompanyModal, handleCloseCompanyModal } =
    useContext(ModalsContext);
  const { formType } = useContext(FormsContext);
  return (
    <Modal
      open={openCompanyModal}
      onClose={handleCloseCompanyModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <Forms type={formType} />
      </Box>
    </Modal>
  );
};

export default CompanyModal;
