import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useUsersOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const UsersOptionsSchema = yup.object({
    search: yup.string(),
    role: yup.string(),
    status: yup.string(),
  });

  const UsersOptionsInitialValues = {
    search: "",
    role: allParams.role || "",
    status: allParams.status || "",
  };

  return { UsersOptionsSchema, UsersOptionsInitialValues };
};

export default useUsersOptionsSchema;
