import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { ForgotPasswordFormTypes } from "../../types/forms.types";

const useForgotPasswordSubmit = () => {
  const { server } = useAxios();
  const {
    handleCloseForgotPasswordModal,
    handleOpenFormsLoading,
    handleCloseFormsLoading,
  } = useContext(FormsContext);
  const navigate = useNavigate();

  const forgotPassword = async (values: ForgotPasswordFormTypes) => {
    handleOpenFormsLoading();
    values.email = values.email.toLowerCase();
    await server
      .post(`/forget-password`, values)
      .then(() => {
        handleAlert({ msg: "Check Your Mail", status: "success" });
        handleCloseForgotPasswordModal();
        navigate(`${import.meta.env.VITE_OTP_ROUTE}`);
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { forgotPassword };
};

export default useForgotPasswordSubmit;
