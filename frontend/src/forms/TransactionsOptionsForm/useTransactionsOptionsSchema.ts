import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useTransactionsOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const TransactionsOptionsSchema = yup.object({
    search: yup.string(),
    role: yup.string(),
    status: yup.string(),
    sort: yup.string(),
    expireWorkPermitFrom: yup.string(),
    expireWorkPermitTo: yup.string(),
    residenceFrom: yup.string(),
    residenceTo: yup.string(),
    changeStatusDateFrom: yup.string(),
    changeStatusDateTo: yup.string(),
    type: yup.string(),
    userId: yup.string(),
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
    userId: allParams.userId || "",
  };

  return { TransactionsOptionsSchema, TransactionsOptionsInitialValues };
};

export default useTransactionsOptionsSchema;
