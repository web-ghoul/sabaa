import Cookies from "js-cookie";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { OTPFormTypes } from "../../types/forms.types";

const useOTPSubmit = () => {
  const { server } = useAxios();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const navigate = useNavigate();

  const OTP = async (values: OTPFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/validate-otp`, values)
      .then((res) => {
        handleAlert({
          msg: "You can reset your password ,Now",
          status: "success",
        });
        Cookies.set("otp", res.data.unique);
        navigate(`${import.meta.env.VITE_RESET_PASSWORD_ROUTE}`);
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };
  return { OTP };
};

export default useOTPSubmit;
