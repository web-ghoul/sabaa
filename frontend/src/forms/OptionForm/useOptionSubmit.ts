import { useContext } from "react";
import { useDispatch } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { AppDispatch } from "../../store/store";
import { OptionFormTypes } from "../../types/forms.types";
import { getSelectors } from "../../store/selectorsSlice";
import { ModalsContext } from "../../contexts/ModalsContext";

const useOptionSubmit = () => {
  const { server } = useAxios();
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    editableSelectorData,
  } = useContext(FormsContext);
  const { handleCloseOptionModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();

  const addOption = async (values: OptionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/selectors?selector=${editableSelectorData.selector}`, {
        data: [...editableSelectorData.options, values.option],
      })
      .then(() => {
        handleAlert({
          msg: "Option is created successfully",
          status: "success",
        });
        dispatch(getSelectors({ selector: "all" }));
        handleCloseOptionModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editOption = async (values: OptionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/selectors?selector=${editableSelectorData.selector}`, {
        data: [...editableSelectorData.options, values.option],
      })
      .then(() => {
        handleAlert({
          msg: "Option is updated successfully",
          status: "success",
        });
        dispatch(getSelectors({ selector: "all" }));
        handleCloseOptionModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };
  return { addOption, editOption };
};

export default useOptionSubmit;
