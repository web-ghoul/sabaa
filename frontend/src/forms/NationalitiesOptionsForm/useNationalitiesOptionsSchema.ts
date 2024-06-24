import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useNationalitiesOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const NationalitiesOptionsSchema = yup.object({
    search: yup.string(),
    limit: yup.string(),
  });

  const NationalitiesOptionsInitailValues = {
    search: "",
    limit: allParams.limit || "",
  };

  return { NationalitiesOptionsInitailValues, NationalitiesOptionsSchema };
};

export default useNationalitiesOptionsSchema;
