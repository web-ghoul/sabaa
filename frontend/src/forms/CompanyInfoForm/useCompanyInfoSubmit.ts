import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import useSecureRoute from "../../hooks/useSecureRoute";
import { login as loginAction } from "../../store/auth";
import { AppDispatch } from "../../store/store";
import { CompanyInfoFormTypes } from "../../types/forms.types";

const useCompanyInfoSubmit = () => {
  const { server } = useAxios();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleSecureRoute } = useSecureRoute();

  const editCompanyInfo = async (values: CompanyInfoFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/login`, values)
      .then((res) => {
        handleAlert({ msg: "Login Successfully", status: "success" });
        navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
        dispatch(
          loginAction({ token: res.data.token, userId: res.data.userId })
        );
        handleSecureRoute();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };
  return { editCompanyInfo };
};

export default useCompanyInfoSubmit;
