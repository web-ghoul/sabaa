import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useJobsOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const JobsOptionsSchema = yup.object({
    search: yup.string(),
    limit: yup.string(),
  });

  const JobsOptionsInitialValues = {
    search: "",
    limit: allParams.limit || "",
  };

  return { JobsOptionsSchema, JobsOptionsInitialValues };
};

export default useJobsOptionsSchema;
