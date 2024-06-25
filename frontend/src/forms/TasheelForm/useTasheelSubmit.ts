import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { AppDispatch, RootState } from "../../store/store";
import { getTasheelsCounter } from "../../store/tasheelsCounterSlice";
import { getTasheels } from "../../store/tasheelsSlice";
import { TasheelFormTypes } from "../../types/forms.types";

const useTasheelSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    editableTasheelData,
  } = useContext(FormsContext);
  const { handleCloseTasheelModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();

  const addTasheel = async (values: TasheelFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/tasheels`, values)
      .then(() => {
        handleAlert({
          msg: "Tasheel is Created Successfully",
          status: "success",
        });
        dispatch(getTasheels({}));
        dispatch(getTasheelsCounter());
        handleCloseTasheelModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editTasheel = async (values: TasheelFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(
        `/tasheels/${editableTasheelData && editableTasheelData._id}`,
        values
      )
      .then(() => {
        handleAlert({
          msg: "Tasheel is Updated Successfully",
          status: "success",
        });
        dispatch(getTasheels({}));
        handleCloseTasheelModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { editTasheel, addTasheel };
};

export default useTasheelSubmit;
