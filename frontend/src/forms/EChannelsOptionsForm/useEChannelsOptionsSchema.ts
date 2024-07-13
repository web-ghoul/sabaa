import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useEChannelsOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const EChannelsOptionsSchema = yup.object({
    search: yup.string(),
    type: yup.string(),
    gender: yup.string(),
    status: yup.string(),
  });

  const EChannelsOptionsInitialValues = {
    search: "",
    type: allParams.type || "",
    gender: allParams.gender || "",
    status: allParams.status || "",
  };

  return { EChannelsOptionsSchema, EChannelsOptionsInitialValues };
};

export default useEChannelsOptionsSchema;
