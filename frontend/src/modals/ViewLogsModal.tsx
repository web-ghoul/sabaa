import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import LogsSection from "../sections/LogsSection";

const ViewLogsModal = () => {
  const { openViewLogsModal, handleCloseViewLogsModal } =
    useContext(ModalsContext);
  return (
    <Modal
      open={openViewLogsModal}
      onClose={handleCloseViewLogsModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal !min-w-[30vw]`}>
        <LogsSection />
      </Box>
    </Modal>
  );
};

export default ViewLogsModal;
