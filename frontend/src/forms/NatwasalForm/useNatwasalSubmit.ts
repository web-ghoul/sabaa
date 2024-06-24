import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getNatwasalsCounter } from "../../store/natwasalsCounterSlice";
import { getNatwasals } from "../../store/natwasalsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { NatwasalFormTypes } from "../../types/forms.types";

const useNatwasalSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    handleCloseNatwasalModal,
    editableNatwasalData,
  } = useContext(FormsContext);
  const dispatch = useDispatch<AppDispatch>();

  const addNatwasal = async (values: NatwasalFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/natwasals`, values)
      .then(() => {
        handleAlert({
          msg: "Natwasal is Created Successfully",
          status: "success",
        });
        dispatch(getNatwasals({}));
        dispatch(getNatwasalsCounter());
        handleCloseNatwasalModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editNatwasal = async (values: NatwasalFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(
        `/natwasals/${editableNatwasalData && editableNatwasalData._id}`,
        values
      )
      .then(() => {
        handleAlert({
          msg: "Natwasal is Updated Successfully",
          status: "success",
        });
        dispatch(getNatwasals({}));
        handleCloseNatwasalModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { addNatwasal, editNatwasal };
};

export default useNatwasalSubmit;
