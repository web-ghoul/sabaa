import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCustomers } from "../../store/customersSlice";
import { AppDispatch, RootState } from "../../store/store";

const useCreateCustomersSheetSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { customersSheets, customerIndex } = useContext(ExcelsContext);

  const createCustomersSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = customersSheets[customerIndex.fileIndex].data;
    await server
      .post(`/owner`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Customers are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_CUSTOMERS_ROUTE}`);
        dispatch(getCustomers({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { createCustomersSheet };
};

export default useCreateCustomersSheetSubmit;
