import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCompany } from "../../store/companySlice";
import { getEmployees } from "../../store/employeesSlice";
import { AppDispatch, RootState } from "../../store/store";

const useCreateEmployeesSheetSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { employeesSheets, employeeIndex } = useContext(ExcelsContext);
  const { handleCloseUploadEmployeesModal } = useContext(ModalsContext);

  const createEmployeesSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = employeesSheets[employeeIndex.fileIndex].data;
    await server
      .post(`/employees`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Employees are Created Successfully",
          status: "success",
        });
        if (id) {
          dispatch(getCompany({ id }));
        } else {
          navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
          dispatch(getEmployees({}));
        }
        handleCloseUploadEmployeesModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { createEmployeesSheet };
};

export default useCreateEmployeesSheetSubmit;
