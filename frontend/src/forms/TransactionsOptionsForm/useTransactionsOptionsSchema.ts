import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useTransactionsOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const TransactionsOptionsSchema = yup.object({
    search: yup.string(),
    role: yup.string(),
    status: yup.string(),
  });

  const TransactionsOptionsInitialValues = {
    search: "",
    role: allParams.role || "",
    status: allParams.status || "",
    sort: allParams.sort || "",
    expireWorkPermitFrom: allParams.expireWorkPermitFrom || "",
    expireWorkPermitTo: allParams.expireWorkPermitTo || "",
    residenceFrom: allParams.residenceFrom || "",
    residenceTo: allParams.residenceTo || "",
    changeStatusDateFrom: allParams.changeStatusDateFrom || "",
    changeStatusDateTo: allParams.changeStatusDateTo || "",
    type: allParams.type || "",
  };

  return { TransactionsOptionsSchema, TransactionsOptionsInitialValues };
};

export default useTransactionsOptionsSchema;
