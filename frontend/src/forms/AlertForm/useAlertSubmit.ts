import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { AlertFormTypes } from "../../types/forms.types";
import { getAlerts } from "../../store/alertsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const useAlertSubmit = () => {
  const { server } = useAxios();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const dispatch = useDispatch<AppDispatch>();

  const editAlert = async (values: AlertFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/alert`, values)
      .then(() => {
        handleAlert({
          msg: "Alerts is Updated Successfully",
          status: "success",
        });
        dispatch(getAlerts());
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };
  return { editAlert };
};

export default useAlertSubmit;
