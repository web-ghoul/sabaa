import Cookies from "js-cookie";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { ResetPasswordFormTypes } from "../../types/forms.types";

const useResetPasswordSubmit = () => {
  const { server } = useAxios();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const navigate = useNavigate();

  const resetPassword = async (values: ResetPasswordFormTypes) => {
    handleOpenFormsLoading();
    try {
      const otp = Cookies.get("otp");
      if (otp) {
        values.otp = otp;
      } else {
        handleAlert({ msg: "Not Authorized", status: "error" });
        return;
      }
      await server
        .patch(`/reset-password`, values)
        .then(() => {
          handleAlert({
            msg: "Password is Changed Successfully",
            status: "success",
          });
          navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } catch (error) {
      console.log(error);
    }
    handleCloseFormsLoading();
  };
  return { resetPassword };
};

export default useResetPasswordSubmit;
