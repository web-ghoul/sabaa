import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getEChannelsCounter } from "../../store/eChannelsCounterSlice";
import { getEChannels } from "../../store/eChannelsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { EChannelFormTypes } from "../../types/forms.types";

const useEChannelSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    handleCloseEChannelModal,
    editableEChannelData,
  } = useContext(FormsContext);
  const dispatch = useDispatch<AppDispatch>();

  const addEChannel = async (values: EChannelFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/e-channel`, values)
      .then(() => {
        handleAlert({
          msg: "E-Channel is Created Successfully",
          status: "success",
        });
        dispatch(getEChannels({}));
        dispatch(getEChannelsCounter());
        handleCloseEChannelModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editEChannel = async (values: EChannelFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(
        `/e-channel/${editableEChannelData && editableEChannelData._id}`,
        values
      )
      .then(() => {
        handleAlert({
          msg: "E-Channel is Updated Successfully",
          status: "success",
        });
        dispatch(getEChannels({}));
        handleCloseEChannelModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { addEChannel, editEChannel };
};

export default useEChannelSubmit;
