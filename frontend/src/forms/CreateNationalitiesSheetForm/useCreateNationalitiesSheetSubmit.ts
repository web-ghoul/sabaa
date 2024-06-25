import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";

const useCreateNationalitiesSheetSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { nationalitiesSheets, nationalityIndex } = useContext(ExcelsContext);

  const createNationalitiesSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = nationalitiesSheets[nationalityIndex.fileIndex].data;
    await server
      .post(`/nationality`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Nationalities are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_NATIONALITIES_ROUTE}`);
        dispatch(getNationalities({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };
  return { createNationalitiesSheet };
};

export default useCreateNationalitiesSheetSubmit;
