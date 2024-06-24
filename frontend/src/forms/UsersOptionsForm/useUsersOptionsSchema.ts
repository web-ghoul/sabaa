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

  const UsersOptionsInitailValues = {
    search: "",
    role: allParams.role || "",
    status: allParams.status || "",
  };

  return { UsersOptionsSchema, UsersOptionsInitailValues };
};

export default useUsersOptionsSchema;
