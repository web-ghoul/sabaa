import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../contexts/FormsContext";
import Forms from "../forms/Forms";

const ForgotPasswordModal = () => {
  const { openForgotPasswordModal, handleCloseForgotPasswordModal } =
    useContext(FormsContext);
  return (
    <Modal
      open={openForgotPasswordModal}
      onClose={handleCloseForgotPasswordModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
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
