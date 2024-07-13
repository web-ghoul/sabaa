import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getOwners } from "../../store/ownersSlice";
import { AppDispatch, RootState } from "../../store/store";

const useCreateOwnersSheetSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { ownersSheets, ownerIndex } = useContext(ExcelsContext);

  const createOwnersSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = ownersSheets[ownerIndex.fileIndex].data;
    await server
      .post(`/owner`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Owners are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
        dispatch(getOwners({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { createOwnersSheet };
};

export default useCreateOwnersSheetSubmit;
