import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useTasheelsOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const TasheelsOptionsSchema = yup.object({
    search: yup.string(),
    type: yup.string(),
  });

  const TasheelsOptionsInitialValues = {
    search: "",
    type: allParams.type || "",
  };

  return { TasheelsOptionsSchema, TasheelsOptionsInitialValues };
};

export default useTasheelsOptionsSchema;
