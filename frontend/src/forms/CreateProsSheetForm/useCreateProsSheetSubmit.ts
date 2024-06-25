import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getPros } from "../../store/prosSlice";
import { AppDispatch, RootState } from "../../store/store";

const useCreateProsSheetSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { prosSheets, proIndex } = useContext(ExcelsContext);

  const createProsSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = prosSheets[proIndex.fileIndex].data;
    await server
      .post(`/owner`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Officers are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_PROS_ROUTE}`);
        dispatch(getPros({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { createProsSheet };
};

export default useCreateProsSheetSubmit;
