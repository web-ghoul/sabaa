import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useEmployeesOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const EmployeesOptionsSchema = yup.object({
    search: yup.string(),
    nationality: yup.string(),
    gender: yup.string(),
    cardType: yup.string(),
    status: yup.string(),
  });

  const EmployeesOptionsInitialValues = {
    search: "",
    nationality: allParams.nationality || "",
    gender: allParams.gender || "",
    cardType: allParams.cardType || "",
    status: allParams.status || "",
  };

  return { EmployeesOptionsSchema, EmployeesOptionsInitialValues };
};

export default useEmployeesOptionsSchema;
