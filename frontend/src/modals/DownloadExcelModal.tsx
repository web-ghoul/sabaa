import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";

const DownloadExcelModal = () => {
  const { openDownloadExcelModal, handleCloseDownloadExcelModal } =
    useContext(ModalsContext);
  return (
    <Modal
      open={openDownloadExcelModal}
      onClose={handleCloseDownloadExcelModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal !min-w-[30vw] md:!min-w-[25vw]`}>
        <Forms type={"downloadExcel"} />
      </Box>
    </Modal>
  );
};

export default DownloadExcelModal;
