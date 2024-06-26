import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useNatwasalsOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const NatwasalsOptionsSchema = yup.object({
    search: yup.string(),
    type: yup.string(),
  });

  const NatwasalsOptionsInitailValues = {
    search: "",
    type: allParams.type || "",
  };

  return { NatwasalsOptionsSchema, NatwasalsOptionsInitailValues };
};

export default useNatwasalsOptionsSchema;
