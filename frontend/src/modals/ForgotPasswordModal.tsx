import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContext";
import Forms from "../forms/Forms";

const ForgotPasswordModal = () => {
  const { openForgotPasswordModal, handleCloseForgotPasswordModal } =
    useContext(ModalsContext);
  return (
    <Modal
      open={openForgotPasswordModal}
      onClose={handleCloseForgotPasswordModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal !min-w-[30vw] md:!min-w-[25vw]`}>
        <Box
          sx={{ backgroundImage: `url(${"/images/forgot_password.jpg"})` }}
          className={`w-full h-[350px] lg:h-[300px] md:h-[250px] sm:h-[200px] bg-no-repeat bg-cover bg-center`}
        />
        <Forms type={"forgotPassword"} />
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;
