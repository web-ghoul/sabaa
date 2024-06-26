import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCompanies } from "../../store/companiesSlice";
import { AppDispatch, RootState } from "../../store/store";

const useCreateCompaniesSheetSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { companiesSheets, companyIndex } = useContext(ExcelsContext);

  const createCompaniesSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = companiesSheets[companyIndex.fileIndex].data;
    await server
      .post(`/company`, values)
      .then(() => {
        handleAlert({
          msg: "Companies Sheet are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
        dispatch(getCompanies({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { createCompaniesSheet };
};

export default useCreateCompaniesSheetSubmit;
